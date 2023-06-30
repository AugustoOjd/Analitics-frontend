import { Box } from '@chakra-ui/react'
import React from 'react'
import SectionMovieColumn from './SectionMovieColumn'


function SectionMoviesContainer() {
  return (
    <Box 
      bg={'gray.700'} 
      h={['1500px']}
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}
      >
        <SectionMovieColumn/>
    </Box>
  )
}

export default SectionMoviesContainer