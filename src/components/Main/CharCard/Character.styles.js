import styled from "styled-components";

export default {
  CardContainer: styled.div`
    background-color: #eeeeee;
    width: 230px;
    height: 270px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 5px 2.5px 5px 2.5px
    border-radius: 5px;
    border: 1px solid lightgrey;
  `,
  CardImg: styled.img`
    height: 210px;
    width: 210px;
    padding: 10px;
    &:hover {
      height: 215px;
      width: 215px;
      padding: 10px 5px 5px 5px;
    }
  `,
  Name: styled.h4`
    font-family: 'Helvetica Neue Thin', sans-serif;
    margin: 10px 0 0 0;
    text-align: center;
    color: #858080;
  `
}