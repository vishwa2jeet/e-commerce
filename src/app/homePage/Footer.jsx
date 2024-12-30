'use client';
import {
  FacebookIcon,
  InstagramIcon,
  StarIcon,
  TwitterIcon,
  YoutubeIcon,
} from '@/assets/Icons';
import { ArrowBackIcon, ArrowForwardIcon, EmailIcon } from '@chakra-ui/icons';
import {
  Text,
  Flex,
  Stack,
  Box,
  Input,
  VStack,
  Button,
  InputGroup,
  InputLeftElement,
  Divider,
} from '@chakra-ui/react';

import React from 'react';

const Feedback = () => {
  return (
   
      <Box
        bg="#F0F0F0"
        mt="40"
        px={20}
        align="center"
        pos="relative"
      >
        <Flex
          px={10}
          pos={'absolute'}
          top={'-20'}
          mr={20}
          py={8}
          rounded={30}
          bg={'black'}
          justify={'center'}
          align="center"
        >
          <Flex w="70%" textAlign="left">
            <Text
              fontSize={'4rem'}
              fontWeight="700"
              lineHeight="1"
              color="white"
            >
              STAY UPTO DATE ABOUT OUR LATEST OFFERS
            </Text>
          </Flex>
          <VStack w="25%">
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <EmailIcon color="#00000080" />
              </InputLeftElement>
              <Input
                rounded={20}
                placeholder="Enter your email address"
                color="#00000090"
                bgColor="#FFFFFF"
              />
            </InputGroup>

            <Button rounded={20} w="full">
              Subscribe to Newsletter
            </Button>
          </VStack>
        </Flex>

        <Flex pt={40} border={'2px solid red'}  justify={'space-between'} >
          <VStack w="20%" border={'2px solid red'} >
            <Text fontSize={'2.8rem'} fontWeight={700}>
              SHOP.CO
            </Text>
            <Text>
              We have clothes that suits your style and which you’re proud to
              wear. From women to men.
            </Text>
            <Flex w="50%" justify={'space-between'}>
              <TwitterIcon />
              <FacebookIcon />
              <InstagramIcon />
              <YoutubeIcon />
            </Flex>
          </VStack>
          <VStack w={'10%'} mt={8}>
            <Text >Company</Text>
            <Text mt={4}>About </Text>
            <Text>Features </Text>
            <Text>Works</Text>
            <Text>Career </Text>
          </VStack>
          <VStack w={'10%'} mt={8}>
            <Text >Help</Text>
            <Text mt={4}>Customer Support </Text>
            <Text>Delivery Details </Text>
            <Text>Terms & Conditions</Text>
            <Text>Privacy Policy </Text>
          </VStack>
          <VStack w={'10%'} mt={8}>
            <Text>FAQ</Text>
            <Text mt={4}>Account </Text>
            <Text>Manage Deliveries </Text>
            <Text>Orders</Text>
            <Text>Payments </Text>
          </VStack>
          <VStack w={'15%'} mt={8}>
            <Text >Resources</Text>
            <Text mt={4}>Free eBooks </Text>
            <Text>Development Tutorial </Text>
            <Text>How to - Blog</Text>
            <Text>Youtube Playlist</Text>
          </VStack>
        </Flex>
        <Divider my='8' bg='#00000050' h={0.5} />
        <Flex pb={4}>
          <Text>Shop.co © 2000-2023, All Rights Reserved</Text>

        </Flex>
      </Box>
   
  );
};
export default Feedback;
