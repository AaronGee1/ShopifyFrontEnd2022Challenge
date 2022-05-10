import { Container, Row } from "reactstrap";
import "./App.css";
import PageJumbotron from "./PageJumbotron";
import "./Prompt";
import Prompt from "./Prompt";

function App() {
  return (
    <div className="App">
      <Container>
        <PageJumbotron />
        <Prompt />
      </Container>
    </div>
  );
}

export default App;
