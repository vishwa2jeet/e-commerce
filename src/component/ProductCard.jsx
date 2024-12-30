import { Box, Flex, Text, VStack } from '@chakra-ui/react';

import React from 'react';
import { StarIcon } from '@/assets/Icons';

function ProductCard({ image, name, price }) {
  return (
    
      <VStack w={'20vw'} mx={4} align="left">
        <Box
          w={'20vw'}
          h={'20vw'}
          bg={'#F0EEED'}
          borderRadius={20}
          overflow={'hidden'}
          pos={'relative'}
        >
          {image}
        </Box>
        <Box>
          <Text fontWeight={'bold'}>{name}</Text>
          <Flex align={'center'}>
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <Text fontSize={'sm'} ml={2}>
              4/5
            </Text>
          </Flex>
          <Text fontWeight={'bold'}>{price}</Text>
        </Box>
      </VStack>
    
  );
}

export default ProductCard;
