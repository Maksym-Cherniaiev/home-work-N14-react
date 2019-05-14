import React from "react";

import Header from "./Header.styles";

function HeaderComponent() {
  return (
    <Header.HeaderWraper>
      <Header.Container>
        <Header.Title>REACT "Rick and Morty" API test</Header.Title>
      </Header.Container>
    </Header.HeaderWraper>
  );
}

export default HeaderComponent;