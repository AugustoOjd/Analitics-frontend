import { Box, HStack } from '@chakra-ui/react'
import React from 'react'

const bgImage = "https://i.pinimg.com/originals/73/82/7d/73827da9b8ed47b7d73c54f099256f43.png"

function ImageBg() {
  return (
    <Box display={'flex'} justifyContent={'center'} alignItems={'flex-start'} bgImage={`url(${bgImage})`} bgSize={'100% 100%'} bgRepeat={'no-repeat'} h={'100%'} w={'100%'}>
      <HStack spacing={['8px']} p={5}>
        <Box w={['75px', '65px', '100px', '120px']} h='40px' bg='yellow.200'>
          Ingresa
        </Box>
        <Box w={['75px', '65px', '100px', '120px']} h='40px' bg='tomato'>
          Prueba
        </Box>
        <Box w={['75px', '65px', '100px', '120px']} h='40px' bg='pink.100'>
          Interactua
        </Box>
      </HStack>
    </Box>
  )
}

export default ImageBg