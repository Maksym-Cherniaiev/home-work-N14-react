import React from "react";

function CharCard(props) {
  return (
    <div key = { props.id }>
      <img src = { props.image } alt = { props.name }/>
      <h4>{ props.name }</h4>
    </div>
  );
}

export default CharCard;