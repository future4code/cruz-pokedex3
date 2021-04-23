import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import PokedexPage from "../Pages/PokedexPage";
import ErrorPage from "../Pages/ErrorPage"
import PokeDetailsPage from '../Pages/PokeDetailsPage';

export default function Router() {
    return (
      <div>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/pokedex" exact component={PokedexPage} />
          <Route path="/pokeDetailsPage/:name" exact component={PokeDetailsPage}/>
          <Route>
            <ErrorPage />
          </Route>
        </Switch>
      </div>
    );
  }
  