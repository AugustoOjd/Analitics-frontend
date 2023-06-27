'use client'

import React from 'react'
import ImageBg from './ImageBg'
import FormContainer from './FormContainer'
import { Box, Stack } from '@chakra-ui/react'

function HomeContainer() {
  return (
        <Stack direction={['column', 'row']} w={'100%'} h={[800, 650, 700, 800]} spacing={0}>
          <Box w={['100%', '45%']} h={[300, 650, 700, 800]}>
            <ImageBg/>
          </Box>
          <Box w={['100%', '55%']} h={[500, 650, 700, 800]} >
            <FormContainer/>
          </Box>
        </Stack>
  )
}

export default HomeContainer