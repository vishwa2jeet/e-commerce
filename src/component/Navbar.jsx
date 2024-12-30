'use client';

import {
  Box,
  Flex,
  Avatar,
  HStack,
  Text,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Input,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, ChevronDownIcon } from '@chakra-ui/icons';
import { useState } from 'react';
import { useRouter } from 'next/router';

const Links = ['On Sale', 'New Arrivals', 'Brands'];

const NavLink = (props) => {
  const { children } = props;

  return (
    <Box
      as="a"
      px={2}
      py={1}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('gray.200', 'gray.700'),
      }}
      href={'/#newArrivals'}
    >
      {children}
    </Box>
  );
};


export default function Simple() {
  const [isSignUpOffervisible, setIsSignUpOffervisible] =useState(true)
  const { isOpen, onOpen, onClose } = useDisclosure();
    // const Router = useRouter();

  return (
    <>
    {isSignUpOffervisible ?
      <Flex bgColor={'black'} w={'100%'} p={2} fontSize={['.7rem', '.7rem', '.8rem', '.8rem',]} justify={'center'}>
        <Text color={'white'}>
          Sign up and get 20% off to your first order.
        </Text>
        <Text
        ml={1}
          color={'white'}
          fontWeight={'bold'}
          borderBottom={'1px solid white'}
        >
          
          Sign Up Now
        </Text>
        <Box as='button' ml={2}>
          <CloseIcon color={'white'} onClick={() => setIsSignUpOffervisible(false)} />
        </Box>
      </Flex> : null}
      
      <Box bg={"white"}  px={[4,4,20,20]}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'} >
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8}  alignItems={'center'}>
            <Box><Text fontWeight={'bold'} >SHOP.CO</Text></Box>

            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}
            >
              <NavLink>
                <Menu>
                  <MenuButton
                  >
                    Shop <ChevronDownIcon />
                  </MenuButton>
                  <MenuList>
                    <MenuItem>New File</MenuItem>
                    <MenuItem>New Window</MenuItem>
                    <MenuDivider />
                    <MenuItem>Open...</MenuItem>
                    <MenuItem>Save File</MenuItem>
                  </MenuList>
                </Menu>
              </NavLink>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
              <Input
            borderRadius={'20'}
            _placeholder={'xyz'}
             />
            </HStack>
            
          </HStack>
        
          <Flex alignItems={'center'}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}
              >
                <Avatar
                  size={'sm'}
                  src={
                    'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                  }
                />
              </MenuButton>
              <MenuList>
                <MenuItem>Link 1</MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuDivider />
                <MenuItem>Link 3</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
