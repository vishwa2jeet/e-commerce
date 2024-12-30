'use client';
import { StarIcon } from '@/assets/Icons';
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import { Text, Flex, Stack, Box } from '@chakra-ui/react';
import ReviewCard from '@/component/ReviewCard';
import React from 'react';
import { useSelector } from 'react-redux';


  
  
const feedback = [
  {
    star: <StarIcon />,
    name: 'vishwajeet',
    review:
      '"Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”',
  },
  {
    star: <StarIcon />,
    name: 'aman',
    review:
      '"Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”',
  },
  {
    star: <StarIcon />,
    name: 'golu',
    review:
      '"Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”',
  },
  {
    star: <StarIcon />,
    name: 'nishu',
    review:
      '"Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”',
  },
  {
    star: <StarIcon />,
    name: 'nishu',
    review:
      '"Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”',
  },
  {
    star: <StarIcon />,
    name: 'nishu',
    review:
      '"Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”',
  },
];

const Feedback = () => {
  const {productList} = useSelector((state) => state.product) || {};
  console.log('productList', productList )
  return (
    <Stack w="100%">
      <Flex px={20} py={10} justify={'space-between'} align={'center'}>
        <Text fontSize={'6xl'} fontWeight={'bold'}>
          OUR HAPPY CUSTOMERS
        </Text>
        <Flex px={10} gap={4}>
          <ArrowBackIcon h={10} w={10} />
          <ArrowForwardIcon h={10} w={10} />
        </Flex>
      </Flex>
      <Flex
        w={'100%'}
        justify={'start'}
        align={'center'}
        pos="relative"
      >
        <Flex w="100%"  overflowX={'scroll'}
        css={{
          // For WebKit browsers (Chrome, Safari)
          '&::-webkit-scrollbar': {
            display: 'none',
          },
          // For Firefox
          scrollbarWidth: 'none',
          // Optional: To remove scrollbar for Internet Explorer/Edge
          msOverflowStyle: 'none',
        }}
        >
          {productList?.reviews && productList?.reviews?.map(({ rating, reviewerName, comment }, index) => {
            return <ReviewCard 
            reviewerName={reviewerName} 
            comment={comment} 
            star={rating} 
            key={index}
            
            />;
          })}

          <Box
            position="absolute"
            top={0}
            bottom={0}
            left={0}
            width="70px"
            backdropFilter="auto"
            backdropBlur="1.5px"
            zIndex={0}
          />

          {/* Right blur effect */}
          <Box
            position="absolute"
            top={0}
            bottom={0}
            right={0}
            width="70px"
            backdropFilter='auto'
            backdropBlur="1.5px"
            zIndex={0}
          />
        </Flex>
      </Flex>
    </Stack>
  );
};

export default Feedback;
