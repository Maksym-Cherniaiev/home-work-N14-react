import React, { Component } from "react";

import axios from "axios";

import CharCard from "./CharCard.js";

class RenderChars extends Component {
  constructor() {
    super();
    this.state = {
      chars: []
    };
    this.request = axios.create({
      baseURL: "https://rickandmortyapi.com/api",
      headers: {
			  "Accept": "application/json",
			  "Content-Type": "application/json"
      }
    });
  }

  componentDidMount() {
    this.request.get("/character")
    .then(data => {
      debugger;
      this.setState({chars: data.data.results})
    });
  }

  render() {
    const display = this.state.chars.map(char => {
      return (
        <CharCard name = { char.name } image = { char.image } id = { char.id }/>
      )
    });
    return display;
  }
}

// async function getChars() {
// 	const data = await fetch("https://rickandmortyapi.com/api/character");
// 	const resolve = await data.json();
//   return resolve.results;
// }

// async function RenderChars() {
//   const arrOfChars = await getChars();
//   const chars = arrOfChars.forEach(
// 		char => {
//     	return (
//         <CharCard name = { char.name } image = { char.image }/>
//       );
//     }
//   );
//   console.log(arrOfChars);
//   return chars;
// }

export default RenderChars;