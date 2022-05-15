import { Container } from "reactstrap";

import "./response.css";

const Responses = (props) => {
  const responseList = props.responseList.map((response, index) => (
    <li className="mt-2 mb-2 fadeIn">
      <Container
        key={index}
        className="p-4 rounded"
        style={{ backgroundColor: "#eef8f9" }}
      >
        <p>
          <strong>Prompt: </strong>
          {response.prompt}
        </p>
        <p>
          <strong>Response: </strong>
          {response.response}
        </p>
      </Container>
    </li>
  ));
  return (
    <div>
      <h3>Responses</h3>
      <ol className="list-unstyled">{responseList}</ol>
    </div>
  );
};

export default Responses;
