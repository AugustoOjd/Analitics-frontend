import { Box, Heading, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import CardMovie from './CardMovie'

const data = [
    {
      header: 'Sugerencias',
      image: 'link de image',
      title: 'titulo de la cosa',
      vip: false,
      price: 321
    },
    {
      image: 'link de image',
      title: 'titulo de la cosa',
      vip: false,
      price: 321
    },
    {
      image: 'link de image',
      title: 'titulo de la cosa',
      vip: false,
      price: 321
    },
    {
      image: 'link de image',
      title: 'titulo de la cosa',
      vip: false,
      price: 321
    },
  ]

function SectionMovieColumn() {
  return (
    <Stack direction={['column', 'row']} spacing='24px'>
        <Stack direction={['column']} gap={'20px'}>
            <Box>
                <Heading 
                h={3} 
                fontSize={'xl'}
                color={'white'}
                >Sugerencias...</Heading>
            </Box>
            <Box 
                w={['300px']} 
                h={['220px']}
                bg='yellow.200'
                display={'flex'}
                justifyContent={'flex-start'}
                alignItems={'center'}
                pl={3}
                >
                <CardMovie/>
            </Box>
        </Stack>
    
        <Box w={['300px']} h={['220px']}bg='tomato'>
            Sugerencias por compras
        </Box>
        <Box w={['300px']} h={['220px']}bg='pink.400'>
            1
        </Box>
        <Box w={['300px']} h={['220px']}bg='blue.100'>
            2
        </Box>
        <Box w={['300px']} h={['220px']}bg='orange.100'>
            3
        </Box>
        <Box w={['300px']} h={['220px']}bg='pink.100'>
            4
        </Box>
    </Stack>
  )
}

export default SectionMovieColumn