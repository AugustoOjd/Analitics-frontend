import { Box } from '@chakra-ui/react'
import React from 'react'
import SectionMovieColumn from './SectionMovieColumn'


function SectionMoviesContainer() {
  return (
    <Box 
      bg={'gray.700'} 
      h={['1600px']}
      // pt={['120px', '150px', '200px', '250px']}
      pt={['20px']}
      pb={'50px'}
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'flex-start'}
      alignItems={'center'}
      overflowY={'auto'}
      >
          <SectionMovieColumn/>
    </Box>
  )
}

export default SectionMoviesContainer