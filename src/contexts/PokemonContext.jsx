import axios from "axios";
import React from "react";
import { useState, useEffect, createContext } from "react";

export const PokemonContext = createContext({});

const PokemonProvider = ({ children }) => {
  const [pokemons, setPokemons] = useState([]);
  const [pokedex, setPokedex] = useState([]);
  const [pokeSearch, setPokeSearch] = useState([]);

  useEffect(() => {
    axios
      .get("//pokeapi.co/api/v2/pokemon/?limit=151")
      .then((res) => setPokemons(res.data.results))
      .catch((err) => console.log(err));
  }, []);

  function addPokedex(pokemon) {
    setPokedex([...pokedex, pokemon]);
  }

  function deletePokedex(pokemonReceived) {
    let filteredPokedex = pokedex.filter(
      (pokemon) => pokemon !== pokemonReceived
    );
    setPokedex(filteredPokedex);
  }

  function handleSearch(value) {
    const filtered = pokemons.filter((pokemon) => pokemon.name.includes(value));
    setPokeSearch(filtered);
  }

  return (
    <PokemonContext.Provider
      value={{
        pokemons,
        pokedex,
        addPokedex,
        deletePokedex,
        pokeSearch,
        handleSearch,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

export default PokemonProvider;
