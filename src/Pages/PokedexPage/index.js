import React, { useContext }  from 'react';
import { useHistory } from "react-router-dom";
import PokeCard from "../../components/PokeCard"
import { GlobalStateContext } from "../../global/GlobalStateContext";

import { goToHomePage } from "../../routes/coordinator";

export default  function PokedexPage() {
  const { pokemons, setPokemons, pokedex } = useContext(GlobalStateContext);
  const history = useHistory('');
  
  const removePokemon = (pokemon, index) => {
    let newPokemons = [...pokemons, pokemon]
    pokedex.splice(index, 1)
    setPokemons(newPokemons )
    alert('Pokemon removido da sua Pokedex')
    localStorage.setItem("savedPokemons", JSON.stringify(newPokemons))
    localStorage.setItem("savedPokedex", JSON.stringify(pokedex))
  }
  console.log(pokedex)
  return (
  <div>
   
        <button onClick={() => goToHomePage(history)}>
              Ir para HomePage
        </button>
      <h1>Essa é a Pokedex do Pokemon</h1>
      <div>Meu card</div>
      {pokedex.length > 0 ? pokedex.map((pokemon, index)=>{
      return(
        <PokeCard key={index}
        pokemon={pokemon}
        pokedex={pokedex}
        name={pokemon.name}
        url={pokemon.url }
        removePokemon = {removePokemon}
        index ={index}/>
      )
    }): (<div> Pokedex Vazia</div>)}
  </div>
  );
}
