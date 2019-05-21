import React from "react";
import ReactDOM from "react-dom";

import MainWrap from "./index.styles";

import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <MainWrap.MainContainer>
      <Header />
      <MainWrap.Title>Characters</MainWrap.Title>
      <Main />
    </MainWrap.MainContainer>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));