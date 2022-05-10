import { Form, FormGroup, Label, Input, Button, Col, Row } from "reactstrap";

function Prompt() {
  return (
    <Form>
      <FormGroup>
        <Label className="text-left" for="prompt">
          <strong>Enter prompt</strong>
        </Label>
        <Input id="prompt" name="text" type="textarea" rows="10" />
        <Row>
          <Col xs="11"></Col>
          <Col xs="1">
            <Button className="mt-2" color="primary">
              Submit
            </Button>
          </Col>
        </Row>
      </FormGroup>
    </Form>
  );
}

export default Prompt;
