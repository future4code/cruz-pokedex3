import React, { useEffect, useState} from 'react';
import {useHistory, useParams} from 'react-router-dom';
import Header from '../../components/Header'
import axios from 'axios';
import { BaseUrl } from '../../constants/BaseUrl';


export default function PokeDetailsPage()  {
  const params = useParams();
  const [pokeDetails, setPokeDetails] = useState([]);

  useEffect(()=>{
    getPokeDetails();

  },[])
  
  const getPokeDetails = () => {
    axios.get(`${BaseUrl}/${params.name}`)
    .then((res)=>{
      setPokeDetails(res.data)
    })
    .catch((error)=>{
      alert('Erro ao fazer requisição')
    });
  };

  return (
      <div>
        <Header/>
        <h1>{pokeDetails.name}</h1>
        <h2> Attacks</h2>
        {pokeDetails.moves &&
          pokeDetails.moves.map((move, index) => {
            if (index < 5) {
              return (
                <div>
                  <p>{move.move.name}</p>
                </div>
              );
            }
          })}

        <h2> Stats </h2>
        {pokeDetails.stats &&
          pokeDetails.stats.map((stat) => {
            return (
              <div>
                <p>
                  <span>{stat.stat.name}</span> : {stat.base_stat}
                </p>
              </div>
            );
          })}
      </div>
  );
}

