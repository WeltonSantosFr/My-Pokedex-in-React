import React from "react";
import { useContext } from "react";
import { PokemonContext } from "../../contexts/PokemonContext";
import { PokeForm } from "./styles";

const SearchPokemon = () => {
  const { handleSearch } = useContext(PokemonContext);
  return (
    <PokeForm>
      <h2>Buscar Pokemon</h2>

      <label htmlFor="name">Nome do pokemon</label>
      <input
        type="text"
        name="name"
        placeholder="Nome do pokemon"
        onChange={(e) => handleSearch(e.target.value)}
      />
    </PokeForm>
  );
};

export default SearchPokemon;
