import { ChevronDownIcon } from '@chakra-ui/icons'
import { Avatar, Box, Button, HStack, Menu, MenuButton, MenuItem, MenuList, Spacer } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'


function NormalMenuList() {

  return (
    <HStack w={'100%'} spacing='24px'>
      <Box w={['auto']} h='40px'>
        <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
      </Box>

      <Spacer/>

      <Box w={['auto']} h='40px' alignItems={'center'} >
        <Button colorScheme='gray' >
          <Link href="/dashboard">Home</Link>
        </Button>
      </Box>
      <Box w={['auto']} h='40px' >
        <Menu>
            <MenuButton as={Button} colorScheme='gray' rightIcon={<ChevronDownIcon />}>
                Category
            </MenuButton>
            <MenuList color={'gray.900'}>
                <MenuItem>
                <Link href={'/movies/action'}>
                        Action
                </Link>
                </MenuItem>
                <MenuItem>
                <Link href={'/movies/drama'}>
                          Drama
                </Link>
                </MenuItem>
                <MenuItem>
                <Link href={'/movies/terror'}>
                          Terror
                </Link>
                </MenuItem>
                <MenuItem>
                <Link href={'/movies/fantasy'}>
                          Fantasy
                </Link>
                </MenuItem>
            </MenuList>
        </Menu>
      </Box>
      
      <Box w={['auto']} h='40px' >
        <Menu>
            <MenuButton as={Button} colorScheme='gray' rightIcon={<ChevronDownIcon />}>
                Movies
            </MenuButton>
            <MenuList color={'gray.900'}>
                <MenuItem>
                  <Link href={'/movies/free'}>
                            Free
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link href={'/movies/premium'}>
                            Premium
                  </Link>
                </MenuItem>
            </MenuList>
        </Menu>
      </Box>

      <Spacer/>

      <Box w={['auto']} h='40px' >
        <Link href={'/'} replace>
          <Button colorScheme='blue'>Logout</Button>
        </Link>
      </Box>
    </HStack> 
  )
}

export default NormalMenuList