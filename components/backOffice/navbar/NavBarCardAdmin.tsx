import { Avatar, Box, Button, HStack, Spacer, Stack, Text } from '@chakra-ui/react'
import React from 'react'

function NavBarCardAdmin() {
  return (
    <Stack w={'100%'}>
      <HStack w={'100%'} spacing='24px' mb={2}>
        <Box w={['auto']} h='40px'>
          <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
        </Box>

        <Spacer/>

        <Box w={['auto']} h='40px' >
            <Button colorScheme='blue'>Logout</Button>
        </Box>
      </HStack>
      
      <HStack
        // bg={'red.800'}
        spacing={['10px', '20px']}
      >
        <Text 
          fontSize={'sm'}
          >
          UserName
        </Text>
        <Text
          fontSize={'sm'}
          >
          Last Conexion 12/02/2023
        </Text>
      </HStack>
    </Stack>

  )
}

export default NavBarCardAdmin