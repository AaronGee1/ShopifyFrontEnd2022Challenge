import { useState } from "react";
import { Container } from "reactstrap";
import PageJumbotron from "./PageJumbotron";
import "./Prompt";
import Prompt from "./Prompt";

function App() {
  const [responseList, setResponseList] = useState([]);

  return (
    <div className="App">
      <Container>
        <PageJumbotron />
        <Prompt responseList={responseList} setResponseList={setResponseList} />
      </Container>
    </div>
  );
}

export default App;
