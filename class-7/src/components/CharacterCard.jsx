import React from 'react';
import { Box, Image, Badge, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const CharacterCard = ({ id, image, name, species, status }) => {
  return (
    <Link to={`/details/${id}`}>
      <Box
      _hover={{ transform: "scale(1.1)" }}
      transition=".3s"
      cursor="pointer"
      maxWidth="sm"
      borderWidth="1px"
      borderRadius="3xl"
      overflow= "hidden"
      >
        <Image src={image} alt={`${name}-image`}/>
        <Box p="4">
          <Box>
            <Badge variant="subtle" colorScheme={status === "Alive" ? "green" : "red"} borderRadius="full" px="2" >
              {status}
            </Badge>
          </Box>
          <Text fontSize="2xl">{name}</Text>
          <Box ml="2" color="gray.600" fontSize="md">
            {species}
          </Box>
        </Box>
      </Box>
    </Link>
  );
};

export default CharacterCard;
