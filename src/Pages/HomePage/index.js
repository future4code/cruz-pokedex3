import React, { useContext } from 'react';
import { useHistory } from "react-router-dom";
import { goToPokedexPage } from "../../routes/coordinator";
import PokeCard from "../../components/PokeCard"
import { GlobalStateContext } from "../../global/GlobalStateContext";


export default function HomePage() {
  
  const { pokemons, pokedex, setPokedex} = useContext(GlobalStateContext);
  const history = useHistory('');
  
  const addPokemon = (pokemon, index) => {
    let newPokedex = [...pokedex, pokemon]
    pokemons.splice(index, 1)
    setPokedex(newPokedex)
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
        name={pokemon.name}
        url={pokemon.url }
        addPokemon = {addPokemon}
        index ={index}/>
      )
    })}
  </div>
  );
}

