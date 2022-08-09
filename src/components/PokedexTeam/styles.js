import styled from "styled-components";

export const PokedexMain = styled.div`
  width: 300px;
  height: max-content;
  border: 2px solid #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #e1e1e1;
  border-radius: 5px;
  ul {
    list-style: none;
    width: 100%;
    height: 100%;

    button {
      width: 90%;
      height: 30px;
      border: none;
      outline: none;
      border-radius: 5px;
      background-color: lightgreen;

      :hover {
        cursor: pointer;
        background-color: green;
      }
    }
  }
`;
