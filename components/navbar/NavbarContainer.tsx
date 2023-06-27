import { Box, HStack } from '@chakra-ui/react'
import React from 'react'

function NavbarContainer() {
  return (
    <Box bg='gray.800' w='100%' p={4} color='white'>
      <HStack spacing='24px'>
        <Box w={['100px']} h='40px' bg='yellow.200'>
          Home
        </Box>
        <Box w={['100px']} h='40px' bg='tomato'>
          Category
        </Box>
        <Box w={['100px']} h='40px' bg='pink.100'>
          Free
        </Box>
        <Box w={['100px']} h='40px' bg='pink.100'>
          Logout
        </Box>
      </HStack>
    </Box>
  )
}

export default NavbarContainer