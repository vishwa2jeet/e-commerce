import React from 'react';
import Image from 'next/image';
import homePageBoy from '../../../public/homePageBoy.png';
import { Box, Button, Flex, Text, VStack, Divider } from '@chakra-ui/react';

function HomePage() {
  return (
    <>
      {/* <Box border={'2px solid red'} pos={'relative'}>

    <Image  alt="homePageBoy"
      src={homePageBoy} />
      </Box> */}
      <Box pos={'relative'}>
        <Box w={['100%', '100%','50%',"50%"]} pt={['4','4','20',"20"]} px={['4','4','20',"20"]}>
          <Text fontSize={['2.5rem', '3rem','3.5rem',"4rem"]} fontWeight={['700','700','500','500']} lineHeight="1">
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </Text>
          <Text fontSize={['.8rem','.9rem','1rem','1rem']} py={'4'}  color={'gray'}>
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </Text>
          <Button
            bgColor={'black'}
            color={'white'}
            size="md"
            w={['100%','100%','25%','30%']}
            borderRadius={20}
            py="4"
          >
            Shop Now
          </Button>
        </Box>
        <Flex py="20" w={['100%','100%','60%','60%']} gap={4} px="20">
          <VStack>
            <Text fontSize="3rem" fontWeight={'bold'} lineHeight=".8">
              200+
            </Text>
            <Text color={'gray'}>International Brands</Text>
          </VStack>

          <Divider orientation="vertical" />
          <VStack>
            <Text fontSize="3rem" fontWeight={'bold'} lineHeight=".8">
              2,000+
            </Text>
            <Text color={'gray'}>High-Quality Products</Text>
          </VStack>
          <Divider orientation="vertical" />
          <VStack>
            <Text fontSize="3rem" fontWeight={'bold'} lineHeight=".8">
              30,000+
            </Text>
            <Text color={'gray'}>Happy Customers</Text>
          </VStack>
        </Flex>
        <Image
          alt="homePageBoy"
          src={homePageBoy}
          placeholder="blur"
          quality={100}
          fill
          sizes="100vw"
          style={{
            objectFit: 'cover',
            zIndex: '-5',
          }}
        />
      </Box>
    </>
  );
}

export default HomePage;
