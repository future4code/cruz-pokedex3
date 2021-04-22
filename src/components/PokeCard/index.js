import React, { useEffect, useState } from 'react';
import Example  from '../../images/Error.png'
import { Container, Img } from './styles';
import BaseUrl from '../../constants/BaseUrl'


export default function PokeCard() {


  return (
      <div>
          <Container>
            <Img src={Example} alt={"exemplo da foto do pokemon"}/>
            <h1> Aqui vao ficar os cards de pokemons :O</h1>

       
          </Container>
      </div>
  );
}