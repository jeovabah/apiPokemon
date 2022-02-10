import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CardPokemon from './CardPokemon';
import "../styles/home.css"
import Header from './Header';
import Footer from './Footer';
const Home = () => {

    const [pokemon, setPokemon] = useState([])

    useEffect(()=>{
        axios.get("https://pokeapi.co/api/v2/pokemon")
        .then((response)=>{
            console.log(response.data)
            setPokemon(response.data.results)
        })
    },[])
     
    
  return (
      <>
      <>
          <Header />
      </>
          
          <div className='container-card'>
          {pokemon.map((item, id)=> (
          <CardPokemon  key={ id } title= {item.name} image={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${id+1}.svg`}/>
          ))}
          </div>
          
          <Footer />
      </>
  );
};

export default Home;
