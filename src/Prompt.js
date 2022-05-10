import {
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Row,
  Container,
  Col,
} from "reactstrap";

function Prompt() {
  return (
    <Form>
      <FormGroup>
        <Row>
          <Label className="text-left" for="prompt">
            Enter prompt
          </Label>
        </Row>
        <Row>
          <Input id="prompt" name="text" type="textarea" />
        </Row>
        <Row>
          <Button>Submit</Button>
        </Row>
      </FormGroup>
    </Form>
  );
}

export default Prompt;
