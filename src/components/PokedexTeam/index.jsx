import React from "react";
import { useContext } from "react";
import { PokemonContext } from "../../contexts/PokemonContext";
import { PokedexMain } from "./styles";

const PokedexTeam = () => {
  const { pokedex, deletePokedex } = useContext(PokemonContext);
  return (
    <PokedexMain>
      <ul>
        <h2>My Pokemons</h2>
        {pokedex?.map((pokemon) => {
          return (
            <li key={pokemon}>
              <h3>{pokemon}</h3>
              <button onClick={() => deletePokedex(pokemon)}>Libertar</button>
            </li>
          );
        })}
      </ul>
    </PokedexMain>
  );
};

export default PokedexTeam;
