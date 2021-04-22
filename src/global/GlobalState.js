import axios from "axios";
import React, { useState, useEffect } from "react";
import { GlobalStateContext } from "./GlobalStateContext";
import { BaseUrl } from "../constants/BaseUrl";

const GlobalState = (props) => {
    const [pokemons, setPokemons] = useState([])
    const [pokedex, setPokedex] = useState([])

  useEffect(() => {
    getPokemons();
  }, []);
    const getPokemons = () =>{
        axios
        .get(BaseUrl)
        .then((res) => {
        setPokemons(res.data.results);
        })
        .catch((err) => {
        console.log(err);
        });
    }

  return (
    <GlobalStateContext.Provider value={{pokemons, setPokemons, pokedex, setPokedex}}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalState;
