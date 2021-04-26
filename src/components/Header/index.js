import React from "react";
import { Container, PokedexImg } from "./styles";
import { useHistory } from "react-router-dom";
import Logo from "../../images/logo.png";
import { goToHomePage, goToPokedexPage } from "../../routes/coordinator";

function Header(props) {
  const history = useHistory("");
  return (
    <Container>
      {props.pokedex ? (
        <div>
          <button onClick={() => goToHomePage(history)}>HomePage</button>
          <PokedexImg src={Logo} alt={"logo Pokedex"} />
        </div>
      ) : (
        <div>
          <button onClick={() => goToPokedexPage(history)}>Pokedex</button>
          <PokedexImg src={Logo} alt={"logo Pokedex"} />
        </div>
      )}
    </Container>
  );
}

export default Header;
