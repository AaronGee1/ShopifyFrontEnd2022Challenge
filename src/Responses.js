import { Container, Row } from "reactstrap";

const Responses = (props) => {
  const responseList = props.responseList.map((response) => (
    <Container className="bg-info mt-2 p-4">
      <Row>Prompt: {response.prompt}</Row>
      <Row>Response: {response.response}</Row>
    </Container>
  ));
  return (
    <div>
      <strong>Responses</strong>
      {responseList}
    </div>
  );
};

export default Responses;
