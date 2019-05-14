import React from "react";
import ReactDOM from "react-dom";

import MainStyles from "./index.styles";

import HeaderComponent from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <MainStyles.MainContainer>
      <HeaderComponent />
      <Main />
    </MainStyles.MainContainer>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));