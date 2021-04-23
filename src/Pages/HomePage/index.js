import React, { useContext } from 'react';
import { useHistory } from "react-router-dom";
import { goToPokedexPage } from "../../routes/coordinator";
import PokeCard from "../../components/PokeCard"
import { GlobalStateContext } from "../../global/GlobalStateContext";


export default function HomePage() {
  
  const { pokemons, pokedex, setPokedex} = useContext(GlobalStateContext);
  const history = useHistory('');
  
  const addPokemonToPokedex = (pokemon, index) => {
    let newPokedex = [...pokedex, pokemon]
    pokemons.splice(index, 1)
    setPokedex(newPokedex)
    localStorage.setItem("savedPokedex", JSON.stringify(newPokedex))
    localStorage.setItem("savedPokemons", JSON.stringify(pokemons))
    alert('Pokemon adicionado a  sua Pokedex')
  }
  console.log(pokemons)
  return (
  <div>
   
        <button onClick={() => goToPokedexPage(history)}>
              Ir para Pokedex
        </button>
      <h1>Essa é a HomePage do Pokemon</h1>
      <div>Meu card</div>
      {pokemons && pokemons.map((pokemon, index)=>{
      return(
        <PokeCard key={index}
        pokemon={pokemon}
        name={pokemon.name}
        url={pokemon.url}
        addPokemonToPokedex = {addPokemonToPokedex}
        index ={index}/>
      )
    })}
  </div>
  );
}

