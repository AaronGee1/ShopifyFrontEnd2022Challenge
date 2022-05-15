import { Container } from "reactstrap";

const Responses = (props) => {
  const responseList = props.responseList.map((response, index) => (
    <li>
      <Container key={index} className="bg-info mt-2 p-4">
        <p>
          <strong>Prompt:</strong> {response.prompt}
        </p>
        <p>
          <strong>Response:</strong> {response.response}
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
