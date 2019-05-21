import React, { Component } from "react";

import axios from "axios";

import Character from "./Character.js";
import Cards from "./Card.styles";
import Message from "./../../Header.styles";
// import Main from "./../../Main.styles";

let currentIdCounter = 1;
let currentPage = 1;
let maxId = 9;

class RenderChars extends Component {
  constructor() {
    super();
    this.state = {
      chars: [],
      page: 0,
      loading: true
    };
    this.loadingText = "LOADING CHARACTERS";
    this.request = axios.create({
      baseURL: "https://rickandmortyapi.com/api/character",
      headers: {
			  "Accept": "application/json",
			  "Content-Type": "application/json"
      }
    });
  }

  renderPrevPage = () => {
    if (currentIdCounter < 9) {
      return currentIdCounter;
    } else {
      currentPage--;
      this.setState({
        page: currentPage,
        loading: true
      });
      currentIdCounter = currentIdCounter - 18;
      maxId = maxId - 18;
      this.componentDidMount();
    }
  }

  renderNextPage = () => {
    currentPage++;
    this.setState({
      page: currentPage,
      loading: true
    });
    if (currentIdCounter < 394) {
      this.componentDidMount();
    }
  }

  charsId() {
    let arrOfId = "";
    while (currentIdCounter <= maxId) {
      arrOfId ? arrOfId = arrOfId + "," + currentIdCounter : arrOfId = arrOfId + currentIdCounter;
      currentIdCounter++;
    }
    maxId = maxId + 9;
    return arrOfId;
  }

  componentDidMount() {
    this.request.get(`/${this.charsId()}`)
    .then(data => {
      this.setState({
        chars: data.data,
        page: currentPage,
        loading: false
      });
      console.log(this.state.page)
    });
  }

  showLoadingText() {
    return (
      <Message.Container>
        <Message.Title>{ this.loadingText }</Message.Title>
      </Message.Container>
    );
  }

  showCharacters() {
    return (
      <>
        <Cards.Carousel>
          <Cards.PrevPage 
            onClick = { this.renderPrevPage } 
            style = {{ visibility: currentPage <= 1 && "hidden" }}
          ></Cards.PrevPage>
          <Cards.CharactersContainer>
            {
              this.state.chars.map(char => {
                return (
                  <Character 
                    name = { char.name } 
                    image = { char.image } 
                    key = { char.id }
                  />
                )
              })
            }
          </Cards.CharactersContainer>
          <Cards.NextPage 
            onClick = { this.renderNextPage }
            style = {{ visibility: currentPage === 43 && "hidden" }}
          ></Cards.NextPage>
        </Cards.Carousel>
        <Cards.Page>Page: { currentPage }</Cards.Page>
      </>
    );
  }

  render = () => this.state.loading ? this.showLoadingText() : this.showCharacters();
}

export default RenderChars;