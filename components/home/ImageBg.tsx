import { Box } from '@chakra-ui/react'
import React from 'react'

const bgImage = "https://i.pinimg.com/originals/73/82/7d/73827da9b8ed47b7d73c54f099256f43.png"

function ImageBg() {
  return (
    <Box bgImage={`url(${bgImage})`} bgSize={'100% 100%'} bgRepeat={'no-repeat'} h={'100%'} w={'100%'}>
    </Box>
  )
}

export default ImageBg