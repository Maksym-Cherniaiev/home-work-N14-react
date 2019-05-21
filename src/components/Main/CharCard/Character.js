import React from "react";

import Character from "./Character.styles";

function CharCard(props) {
  return (
    <Character.CardContainer key = { props.id }>
      <Character.CardImg src = { props.image } alt = { props.name }/>
      <Character.Name>{ props.name }</Character.Name>
    </Character.CardContainer>
  );
}

export default CharCard;