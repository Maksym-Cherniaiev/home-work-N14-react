import React from "react";

import Main from "./Main.styles";

import RenderChars from "./Main/CharCard/RenderCard";

function RenderMain() {
  return (
    <>
      <Main.Container>
        <RenderChars />
      </Main.Container>
    </>
  );
}

export default RenderMain;