import styled from "styled-components";

export const ListPokemonsStyled = styled.div`
  width: 300px;
  max-height: 50%;
  border: 2px solid #000;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  ul {
    max-width: 100%;
    height: 100%;
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    overflow-y: scroll;

    li {
      display: flex;
      min-width: 100%;
      height: 30px;
      align-items: center;
      justify-content: space-between;

      button {
        height: 100%;
        background-color: rgb(255, 0, 0);
        border: none;
        outline: none;
        border-radius: 5px;
        color: rgb(20, 20, 20);

        :hover {
          cursor: pointer;
          background-color: rgb(200, 0, 0);
        }
      }
    }
  }
`;
