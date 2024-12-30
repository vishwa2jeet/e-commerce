'use client';
import { Box, VStack, Text, Flex, Button, Divider } from '@chakra-ui/react';
import React, { useState, useEffect, useRef } from 'react';

//-------- Product Image----------------
import Tshirt from '../../../public/t-shirt.png';
import Jeans from '../../../public/jeans.png';
import Shirt from '../../../public/shirt.png';
import Tshirt2 from '../../../public/t-shirt2.png';
import ProductCard from '@/component/ProductCard';
import Image from 'next/image';
//--------------------------------------------

import { useDispatch, useSelector } from 'react-redux';
import { getProductList } from '@/store/actions';
// import { getProduct } from './../../store/actions';
import productReducer from './../../store/product/reducer';

function NewArrivals() {
  const dispatch = useDispatch();
  const renderCount = useRef(1);
  //---------------------------------------------
  const { productList, getProductListLoading } =
    useSelector((state) => state.product) || {};

//   console.log('getProductListLoading1', getProductListLoading);
//   console.log('list', productList);

  useEffect(() => {
    dispatch(getProductList());
  }, []);
  
  //-----------------------------------------------------------

  const newArrivalsList = [
    {
      name: 'T-SHIRT WITH TAPE DETAILS',
      image: <Image src={Tshirt} alt="T-shirt" fill />,
      price: '$120',
    },
    {
      name: 'SKINNY FIT JEANS',
      image: <Image src={Jeans} alt="Jeans" fill />,
      price: '$220',
    },
    {
      name: 'CHECKERED SHIRT',
      image: <Image src={Shirt} alt="T-shirt" fill />,
      price: '$180',
    },
    {
      name: 'SLEEVE STRIPED T-SHIRT',
      image: <Image src={Tshirt2} alt="T-shirt" fill />,
      price: '$300',
    },
  ];
  return (
    <VStack px={20} w="100%" id={'newArrivals'}>
      <Box pt={20} pb={15}>
        <Text fontWeight={'bold'} fontSize={'6xl'}>
          NEW ARRIVALS
        </Text>
      </Box>
      <Flex w={'100%'} overflowX={'scroll'}
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
        {productList && productList.map((product, index) => {
          return (
            <ProductCard key={index} image={product.images} name={product.title} price={product.price} />
          );
        })}
      </Flex>
      {/* <Flex>
        {newArrivalsList.map(({ image, name, price }, index) => {
          return (
            <ProductCard key={index} image={image} name={name} price={price} />
          );
        })}
      </Flex> */}

      <Button
        py={2}
        px={24}
        my={16}
        size="lg"
        variant={'outline'}
        borderRadius={30}
      >
        View All
      </Button>
      <Divider />

      <Box pt={20} pb={15}>
        <Text fontWeight={'bold'} fontSize={'6xl'}>
          TOP SELLING
        </Text>
      </Box>
      <Flex>
        {newArrivalsList.map(({ image, name, price }, index) => {
          return (
            <ProductCard key={index} image={image} name={name} price={price} />
          );
        })}
      </Flex>
      <Button
        py={2}
        px={24}
        my={16}
        size="lg"
        variant={'outline'}
        borderRadius={30}
      >
        View All
      </Button>
    </VStack>
  );
}

export default NewArrivals;
