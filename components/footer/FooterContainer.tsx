'use client'

import React from 'react'
import { Box, Container } from '@chakra-ui/react'
import FooterGrid from './FooterGrid'
import FooterNet from './FooterNet'

function FooterContainer() {
  return (
    <Box w={'100%'} bg={'blue.200'} h={220} >
      <Box bg={'white'} h={170} display={'flex'} justifyContent={'center'} alignItems={'center'}>
        <FooterGrid/>
      </Box>
      <Box h={50} display={'flex'} justifyContent={'center'} alignItems={'center'}>
        <FooterNet/>
      </Box>
    </Box>
  )
}

export default FooterContainer