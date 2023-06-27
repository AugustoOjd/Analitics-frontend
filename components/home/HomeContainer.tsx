'use client'

import React from 'react'
import ImageBg from './ImageBg'
import FormContainer from './FormContainer'
import { Box, Stack } from '@chakra-ui/react'

function HomeContainer() {
  return (
        <Stack direction={['column', 'row']} w={'100%'} h={650} spacing={0}>
          <Box w={['100%', '45%']} h={[360, 650]}>
            <ImageBg/>
          </Box>
          <Box w={['100%', '55%']} h={[600, 650]} >
            <FormContainer/>
          </Box>
        </Stack>
  )
}

export default HomeContainer