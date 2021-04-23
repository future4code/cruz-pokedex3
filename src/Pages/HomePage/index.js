import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { goToPokedexPage } from "../../routes/coordinator";
import PokeCard from "../../components/PokeCard";
import { GlobalStateContext } from "../../global/GlobalStateContext";
import { Cards } from "../../global/styles";
import Header from "../../components/Header";

export default function HomePage() {
  const { pokemons, pokedex, setPokedex } = useContext(GlobalStateContext);
  const history = useHistory("");

  const addPokemonToPokedex = (pokemon, index) => {
    let newPokedex = [...pokedex, pokemon];
    pokemons.splice(index, 1);
    setPokedex(newPokedex);
    localStorage.setItem("savedPokedex", JSON.stringify(newPokedex));
    localStorage.setItem("savedPokemons", JSON.stringify(pokemons));
    alert("Pokemon adicionado a  sua Pokedex");
  };
  console.log(pokemons);
  return (
    <div>
      <Header pokemon={pokemons} />

      <Cards>
        {pokemons &&
          pokemons.map((pokemon, index) => {
            return (
              <PokeCard
                key={index}
                pokemon={pokemon}
                name={pokemon.name}
                url={pokemon.url}
                addPokemonToPokedex={addPokemonToPokedex}
                index={index}
              />
            );
          })}
      </Cards>
    </div>
  );
}
