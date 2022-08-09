import styled from "styled-components";

export const PokeForm = styled.form`
  width: 300px;
  height: max-content;
  border: 2px solid #000;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  text-align: center;
  gap: 1rem;
  background-color: rgb(155, 155, 155);

  input {
    height: 30px;
    width: 90%;
    align-self: center;
    border-radius: 5px;
    outline: none;
    border: none;
    margin-bottom: 1rem;
    background-color: rgb(225, 225, 225);
    color: #000;
  }
`;
