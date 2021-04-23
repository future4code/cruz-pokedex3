import React, { useEffect, useState } from 'react';
import Example  from '../../images/Error.png'
import { Container, Img } from './styles';
import axios from 'axios';
import {goToPokeDetailsPage} from '../../routes/coordinator'


export default function PokeCard(props) {
  const [pokePicture, setPokePicture] = useState([])    
    
  useEffect(()=>{
    getPokePicture();
  },[props.url])

  const getPokePicture = () =>{
    axios
    .get(props.url)
    .then((res)=>{
    setPokePicture(res.data.sprites.versions[`generation-iii`].emerald.front_default)
  })
    .catch((err)=>{ 
        console.log(err)
    })
  }
  return (
      <div>
          <Container>
            <Img src={pokePicture} alt={"exemplo da foto do pokemon"}/>
            <h1> {props.name}</h1>
            {console.log(props.name)}

            {props.pokedex ?(
                <div>
                    <button >Remover</button>
                    <button onClick={()=>goToPokeDetailsPage(props.name)}>Detalhes</button>
                </div>
            ):(<div>
                    <button>Capturar</button>
                    <button onClick={()=>goToPokeDetailsPage(props.name)}>Detalhes</button>
                </div>)
        }
          </Container>
      </div>
  );
}