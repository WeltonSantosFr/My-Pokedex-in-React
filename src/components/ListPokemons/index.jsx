import React from "react";
import { useContext } from "react";
import { PokemonContext } from "../../contexts/PokemonContext";
import { ListPokemonsStyled } from "./styles";

const ListPokemons = () => {
  const { pokemons, addPokedex, pokeSearch } = useContext(PokemonContext);

  return (
    <ListPokemonsStyled>
      <h1>Pokemons</h1>
      <ul>
        {pokeSearch?.length > 0
          ? pokeSearch.map((pokemon) => {
              return (
                <li key={pokemon.name}>
                  <h3>{pokemon.name}</h3>

                  <button onClick={() => addPokedex(pokemon.name)}>
                    Capturar
                  </button>
                </li>
              );
            })
          : pokemons.map((pokemon) => {
              return (
                <li key={pokemon.name}>
                  <h3>{pokemon.name}</h3>

                  <button onClick={() => addPokedex(pokemon.name)}>
                    Capturar
                  </button>
                </li>
              );
            })}
      </ul>
    </ListPokemonsStyled>
  );
};

export default ListPokemons;
