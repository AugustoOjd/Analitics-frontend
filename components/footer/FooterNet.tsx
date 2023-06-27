import { HStack,Box } from '@chakra-ui/react'
import React from 'react'

const FooterNet = () => {
  return (
    <HStack spacing={['24px',  '50px']}>
        <Box w='40px' h='40px' bg='yellow.200'>
            Lin
        </Box>
        <Box w='40px' h='40px' bg='tomato'>
            Git
        </Box>
    </HStack>
  )
}

export default FooterNet