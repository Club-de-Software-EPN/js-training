import React, { useState, useEffect } from 'react';
import { VStack, Image } from '@chakra-ui/react';
import RickAndMortyLogo from '../assets/rick-and-morty-logo.png'

import CardContainer from '../components/CardContainer';

const Home = () => {
  const [characters, setCharacters] = useState(null);
  const [loading, setLoading] = useState(true);

  //onMount
  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character/')
      .then((response) => response.json())
      .then((json) => {
        setCharacters(json.results);
        setLoading(false);
      });
  }, []);

  if (loading === true) {
    return <h1>Espera, estamos cargando los datos</h1>;
  }

  return(
    <VStack>
      <Image src={RickAndMortyLogo} alt="Rick and Morty Logo"/>
      <CardContainer characters={characters} />
    </VStack>
  );
}

export default Home;
