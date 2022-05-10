import { Container, Row } from "reactstrap";
import "./App.css";
import "./Prompt";
import Prompt from "./Prompt";

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <header>Fun with AI</header>
        </Row>
        <Row>
          <Prompt />
        </Row>
      </Container>
    </div>
  );
}

export default App;
