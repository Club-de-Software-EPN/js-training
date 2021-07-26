import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Detail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then(response => response.json())
    .then(data => {
      setCharacter(data);
    })
  }, [id]);

  if (character === null) {
    return (
      <h1>Loading ...</h1>
    )
  }

  return (
    <h1>{ character.name }</h1>
  );
}

export default Detail;
