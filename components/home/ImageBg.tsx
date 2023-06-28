'use client'

import { ArrowForwardIcon, Search2Icon, ViewIcon } from '@chakra-ui/icons'
import { Box, Spacer, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import CardHeader from '@/components/home/CardHeader'

const bgImage = "https://i.pinimg.com/originals/73/82/7d/73827da9b8ed47b7d73c54f099256f43.png"

const data = [
  {
    title: 'Ingresa',
    icon: <ArrowForwardIcon boxSize={7} color={'orange.300'}/>,
    xs: '230px',
    sm: '200px',
    md: '230px',
    xl: '250px',
    gt: 'linear(to-l, orange.400, teal.400)'
  },
  {
    title: 'Prueba',
    icon: <ArrowForwardIcon boxSize={7} color={'orange.300'}/>,
    xs: '200px',
    sm: '180px',
    md: '190px',
    xl: '220px',
    gt: 'linear(to-tl, orange.300, teal.500)'
  },
  {
    title: 'Interactua',
    icon: <ArrowForwardIcon boxSize={7} color={'orange.300'}/>,
    xs: '170px',
    sm: '160px',
    md: '170px',
    xl: '200px',
    gt: 'linear(to-tl, orange.200, teal.600)'
  }
]

function ImageBg() {
  return (
    <Box display={'flex'} justifyContent={['flex-start', 'flex-start', 'flex-start', 'flex-start', 'center']} alignItems={'flex-start'} bgImage={`url(${bgImage})`} bgSize={'100% 100%'} bgRepeat={'no-repeat'} h={'100%'} w={'100%'}>
      <Stack direction={['column', 'column', 'column', 'column', 'row']} spacing={['10px', '8px']} p={5}>
        {
          data.map((t:any) => (
            <CardHeader 
              key={t.title} 
              title={t.title}
              icon={t.icon} 
              xs={t.xs} 
              sm={t.sm} 
              md={t.md} 
              xl={t.xl} 
              gt={t.gt} />
          ))
        }
      </Stack>
    </Box>
  )
}

export default ImageBg