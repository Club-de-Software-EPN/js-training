import React from 'react';
import { Wrap, WrapItem } from '@chakra-ui/react';

import CharacterCard from './CharacterCard';

const CardContainer = ({ characters }) => {
  return(
    <Wrap spacing="40px" justify="center">
      {characters.map(character => (
        <WrapItem>
          <CharacterCard { ...character } />
        </WrapItem>
      ))}
    </Wrap>
  );
}

export default CardContainer;
