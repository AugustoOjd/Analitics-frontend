'use client'

import React from 'react'
import { Box } from '@chakra-ui/react'
import FooterGrid from './FooterGrid'
import FooterNet from './FooterNet'

function FooterContainer() {
  return (
    <Box w={'100%'} bg={'gray.800'} h={[450, 250, 300, 350, 400]} >
      <Box bg={'white'} h={[400, 200, 250, 300, 350]} display={'flex'} px={2} justifyContent={'center'} alignItems={'center'}>
        <FooterGrid/>
      </Box>
      <Box h={50} display={'flex'} justifyContent={'center'} alignItems={'center'}>
        <FooterNet/>
      </Box>
    </Box>
  )
}

export default FooterContainer