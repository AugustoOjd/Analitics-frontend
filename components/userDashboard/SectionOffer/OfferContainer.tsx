'use client'

import { Box, Stack } from '@chakra-ui/react'
import React from 'react'
import OfferCard from './OfferCard'
import { TimeIcon } from '@chakra-ui/icons'



function OfferContainer() {
  return (
    <Box 
      h={['360px']} 
      bg={'white'} 
      display={'flex'} 
      justifyContent={'center'} 
      alignItems={'center'}
      >
        <Stack direction={['column', 'column', 'row']} spacing={['15px']}>
              <OfferCard/>
        </Stack>
    </Box>
  )
}

export default OfferContainer