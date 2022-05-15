import { useState } from "react";
import { Label, Input, Button, Col, Row } from "reactstrap";
import env from "react-dotenv";

const Prompt = (props) => {
  const [prompt, setPrompt] = useState("");

  const sendPrompt = () => {
    const data = {
      prompt: prompt,
      temperature: 0.5,
      max_tokens: 64,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    };

    fetch("https://api.openai.com/v1/engines/text-curie-001/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${env.OPENAI_KEY}`,
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        const response = {
          prompt: prompt,
          response: result["choices"][0]["text"],
        };
        props.setResponseList([response, ...props.responseList]);
      });

    setPrompt("");
  };

  const updatePrompt = (e) => {
    setPrompt(e.target.value);
  };

  return (
    <div>
      <Label className="text-left" for="prompt">
        <h3>Enter your prompt</h3>
      </Label>
      <Input
        id="prompt"
        name="text"
        type="textarea"
        rows="10"
        value={prompt}
        onChange={updatePrompt}
      />
      <Row>
        <Col xs="11"></Col>
        <Col xs="1">
          <Button onClick={sendPrompt} className="mt-2" color="primary">
            Submit
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default Prompt;
