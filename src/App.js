import { useEffect, useState } from "react";
import { Container } from "reactstrap";
import PageJumbotron from "./PageJumbotron";
import "./Prompt";
import Prompt from "./Prompt";
import Responses from "./Responses";

function App() {
  const [responseList, setResponseList] = useState([]);

  useEffect(() => {
    const savedList = JSON.parse(localStorage.getItem("responseList"));
    if (savedList.length > 0) {
      setResponseList(savedList);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("responseList", JSON.stringify(responseList));
  }, [responseList]);

  return (
    <div className="App">
      <Container>
        <PageJumbotron />
        <Prompt responseList={responseList} setResponseList={setResponseList} />
        <Responses responseList={responseList} />
      </Container>
    </div>
  );
}

export default App;
