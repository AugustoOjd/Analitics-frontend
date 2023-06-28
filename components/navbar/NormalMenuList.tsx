import { ChevronDownIcon } from '@chakra-ui/icons'
import { Avatar, Box, Button, HStack, Menu, MenuButton, MenuItem, MenuList, Spacer } from '@chakra-ui/react'
import React from 'react'


function NormalMenuList() {
  return (
    <HStack w={'100%'} spacing='24px'>
      <Box w={['auto']} h='40px'>
        <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
      </Box>

      <Spacer/>

      <Box w={['auto']} h='40px' alignItems={'center'} >
        <Button colorScheme='gray' >Home</Button>
      </Box>
      <Box w={['auto']} h='40px' >
        <Menu>
            <MenuButton as={Button} colorScheme='gray' rightIcon={<ChevronDownIcon />}>
                Category
            </MenuButton>
            <MenuList color={'gray.900'}>
                <MenuItem>Action</MenuItem>
                <MenuItem>Drama</MenuItem>
                <MenuItem>Horror</MenuItem>
                <MenuItem>Fantasy</MenuItem>
            </MenuList>
        </Menu>
      </Box>
      
      <Box w={['auto']} h='40px' >
        <Menu>
            <MenuButton as={Button} colorScheme='gray' rightIcon={<ChevronDownIcon />}>
                Movies
            </MenuButton>
            <MenuList color={'gray.900'}>
                <MenuItem>Free</MenuItem>
                <MenuItem>Premium</MenuItem>
            </MenuList>
        </Menu>
      </Box>

      <Spacer/>

      <Box w={['auto']} h='40px' >
      <Button colorScheme='blue'>Logout</Button>
      </Box>
    </HStack> 
  )
}

export default NormalMenuList