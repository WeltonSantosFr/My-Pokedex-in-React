import "./App.css";

import ListPokemons from "./components/ListPokemons";
import PokedexTeam from "./components/PokedexTeam";
import SearchPokemon from "./components/SearchPokemon";

function App() {
  return (
    <div className="App">
      <SearchPokemon />
      <PokedexTeam />
      <ListPokemons />
    </div>
  );
}

export default App;
