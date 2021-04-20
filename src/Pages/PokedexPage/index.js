import React from 'react';
import { useHistory } from "react-router-dom";
import { goToHomePage } from "../../routes/coordinator";

export default  function PokedexPage() {
    const history = useHistory();
  return (
    <div>
        <div>
          <button onClick={() => goToHomePage(history)}>
              Ir para HomePage
          </button>
        </div>
     <h1>Essa é a Page da Pokedex</h1> 
    </div>
      ) ;
}
