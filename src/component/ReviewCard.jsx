import { Box, Flex, Text, VStack } from '@chakra-ui/react';

import React from 'react';
import { StarIcon } from '@/assets/Icons';

function ReviewCard({ star, reviewerName, comment, }) {
  return (
    
    <Box mx={2} >
    <VStack w='28vw' mx={2} align="start" spacing={3}  border={'1px solid black'} borderRadius="lg" p={6}>
      <Box>
       {star}
      </Box>
      <Text fontWeight="bold">{reviewerName}</Text>
      <Text fontSize="sm">{comment}</Text>
    </VStack>
   </Box> 

    //   <VStack justy='center' >
    //     <Box
    //      border={'1px solid #00000020'} 
    //      rounded={20} 
    //      p={8} 
    //      w={'30vw'} mx={2} align="left"
    //     >
    //       {star}
    //       <Text fontWeight={'bold'} fontSize={'1.5rem'}>
    //        {name}
    //       </Text>
    //       <Text fontWeight={'bold'} fontSize={'.9rem'}>
    //        {review}
    //       </Text>
    //       </Box>
    //   </VStack>
    
  );
}

export default ReviewCard;
