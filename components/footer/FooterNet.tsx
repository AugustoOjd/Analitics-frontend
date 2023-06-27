import { HStack,Box, Button, Text } from '@chakra-ui/react'
import React from 'react'

const FooterNet = () => {
  return (
    <HStack spacing={['15px',  '50px']}>
        <Box >
            <Text fontSize={['xs', 'md']} fontWeight={'semibold'} color={'white'}>Augusto Ojeda ©</Text>
        </Box>
        <Box >
            <Button colorScheme='linkedin'>Linkedin</Button>
        </Box>
        <Box >
            <Button colorScheme='gray'>Github</Button>
        </Box>
    </HStack>
  )
}

export default FooterNet