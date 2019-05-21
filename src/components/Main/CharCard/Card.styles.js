import styled from "styled-components";

export default {
  Carousel: styled.div`
    display: flex;
  `,
  CharactersContainer: styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    width: 1220;
    margin-bottom: 20px;
    background-color: white;
    border-radius: 5px;
    border: 1px solid lightgrey;
  `,
  PrevPage: styled.div`
    width: 0;
    height: 0;
    border-top: 40px solid transparent;
    border-bottom: 40px solid transparent;
    border-right: 20px solid lightgrey;
    align-self: center;
    padding-left: 10px;
    &:hover {
      border-right: 20px solid #858080;
    }
  `,
  NextPage: styled.div`
    width: 0;
    height: 0;
    border-top: 40px solid transparent;
    border-bottom: 40px solid transparent;
    border-left: 20px solid lightgrey;
    align-self: center;
    padding-left: 10px;
    &:hover {
      border-left: 20px solid #858080;
    }
  `,
  Page: styled.p`
    font-family: 'Helvetica Neue Thin', sans-serif;
    font-size: 16px;
    color: #858080;
    align-self: flex-end;
    margin: 0 30px 0 0;
  `
}