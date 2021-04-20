import React from 'react';
import { useHistory } from "react-router-dom";
import { goToPokedexPage } from "../../routes/coordinator";


export default function HomePage() {
    const history = useHistory();
  return (
  <div>
        <button onClick={() => goToPokedexPage(history)}>
              Ir para Pokedex
        </button>
      <h1>Essa é a HomePage do Pokemon</h1>
  </div>);
}
