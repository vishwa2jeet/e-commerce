import { Box, VStack, Text, Flex } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import casual from '../../../public/images/casual.png'
import formal from '../../../public/images/formal.png'
import party from '../../../public/images/party.png'
import gym from '../../../public/images/gym.png'

function DressStyle() {
  return (
    <VStack px={20}>
    <VStack w={'100%'} h={'110vh'} px={20} bgColor={'#F0F0F0'} borderRadius={40} >
    <Text fontSize={'6xl'} fontWeight={'bold'} py={8}    >BROWSE BY DRESS STYLE</Text>
    <Flex w={'100%'} h={'35%'} mb={8}  >
      <Box  flex={1}  rounded={12} overflow={'hidden'}mr={5} pos={'relative'} >
        <Image src={casual} alt='casual' fill />
      </Box>
      <Box  flex={2}  rounded={12} overflow={'hidden'}pos={'relative'} >
        <Image src={formal} alt='formal' fill  />
      </Box>
    </Flex>
    <Flex w={'100%'} h={'35%'}  >
      <Box flex={2} rounded={12} overflow={'hidden'} mr={5} pos={'relative'} >
        <Image src={party} alt='casual' fill />
      </Box>
      <Box flex={1} rounded={12} overflow={'hidden'} pos={'relative'} >
        <Image src={gym} alt='formal' fill />
      </Box>
    </Flex>
    </VStack>  
    </VStack>
  )
}

export default DressStyle