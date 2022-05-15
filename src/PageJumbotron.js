import { Container, Row, Col } from "reactstrap";

const PageJumbotron = (props) => {
  return (
    <Container className="rounded px-3 px-sm-4 py-3 py-sm5 text-center">
      <Row>
        <Col xs="2" />
        <Col xs="8">
          <h1 className="display-3">Fun with AI</h1>
          <hr className="my-2" />
          <h2 className="lead">
            OpenAI GPT-3 AI generated responses from user written prompts
          </h2>
        </Col>
        <Col xs="2" />
      </Row>
    </Container>
  );
};
export default PageJumbotron;
