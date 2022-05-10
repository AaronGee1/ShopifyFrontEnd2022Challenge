import { Form, FormGroup, Label, Input, Button, Row } from "reactstrap";

function Prompt() {
  return (
    <div>
      <Form>
        <FormGroup>
          <Row>
            {" "}
            <Label for="prompt">Enter prompt</Label>
          </Row>
          <Row>
            <Input id="prompt" name="text" type="textarea" />
          </Row>
          <Row>
            <Button>Submit</Button>
          </Row>
        </FormGroup>
      </Form>
    </div>
  );
}

export default Prompt;
