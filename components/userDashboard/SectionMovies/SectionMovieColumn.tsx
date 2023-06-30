import { Box, HStack, Heading, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import CardMovie from './CardMovie'

const data = [
    {
      header: 'Sugerencias',
      image: 'https://bit.ly/dan-abramov',
      title: 'titulo de la cosa',
      vip: false,
      price: 321
    },
    {
      header: 'Sugerencias',
      image: 'https://bit.ly/dan-abramov',
      title: 'titulo de la cosa',
      vip: false,
      price: 321
    },
    {
      header: 'Sugerencias',
      image: 'https://bit.ly/dan-abramov',
      title: 'titulo de la cosa',
      vip: false,
      price: 321
    },
    {
      header: 'Sugerencias',
      image: 'https://bit.ly/dan-abramov',
      title: 'titulo de la cosa',
      vip: false,
      price: 321
    },
  ]

const data2 = [
  {
    image: 'https://bit.ly/kent-c-dodds',
    title: 'titulo de la cosa',
    vip: false,
    price: 321
  },
  {
    image: 'https://bit.ly/kent-c-dodds',
    title: 'titulo de la cosa',
    vip: false,
    price: 321
  },
  {
    image: 'https://bit.ly/kent-c-dodds',
    title: 'titulo de la cosa',
    vip: false,
    price: 321
  },
  {
    image: 'https://bit.ly/kent-c-dodds',
    title: 'titulo de la cosa',
    vip: false,
    price: 321
  },
  {
    image: 'https://bit.ly/kent-c-dodds',
    title: 'titulo de la cosa',
    vip: false,
    price: 321
  },
]

const data3 = [
  {
    image: 'https://bit.ly/ryan-florence',
    title: 'titulo de la cosa',
    vip: false,
    price: 321
  },
  {
    image: 'https://bit.ly/ryan-florence',
    title: 'titulo de la cosa',
    vip: false,
    price: 321
  },
  {
    image: 'https://bit.ly/ryan-florence',
    title: 'titulo de la cosa',
    vip: false,
    price: 321
  },
  {
    image: 'https://bit.ly/ryan-florence',
    title: 'titulo de la cosa',
    vip: false,
    price: 321
  },
  {
    image: 'https://bit.ly/ryan-florence',
    title: 'titulo de la cosa',
    vip: false,
    price: 321
  },
]
const data4 = [
  {
    image: 'https://bit.ly/code-beast',
    title: 'titulo de la cosa',
    vip: false,
    price: 321
  },
  {
    image: 'https://bit.ly/code-beast',
    title: 'titulo de la cosa',
    vip: false,
    price: 321
  },
  {
    image: 'https://bit.ly/code-beast',
    title: 'titulo de la cosa',
    vip: false,
    price: 321
  },
  {
    image: 'https://bit.ly/code-beast',
    title: 'titulo de la cosa',
    vip: false,
    price: 321
  },
]

function SectionMovieColumn() {
  return (
    <Stack direction={['column']} spacing='24px'>
        <Stack direction={['column']} gap={'20px'}>
            <Box>
                <Heading 
                h={3}
                ml={2} 
                fontSize={'xl'}
                color={'white'}
                >Porque viste...</Heading>
            </Box>
            <Box 
                w={['310px', '400px', '750px', '900px', '1200px', '1700px']} 
                h={['220px', '250px', '300px']}
                bg='orange.100'
                display={'flex'}
                justifyContent={'flex-start'}
                alignItems={'center'}
                overflowX={'auto'}
                px={2}
                >
                  <HStack gap={5}>
                  {
                    data.map((e:any, i)=> (
                      <CardMovie key={i} image={e.image} title={e.title} vip={e.vip} price={e.price}  />
                    ))
                  }
                  </HStack>
            </Box>
        </Stack>
        <Stack direction={['column']} gap={'20px'}>
            <Box>
                <Heading 
                h={3}
                ml={2} 
                fontSize={'xl'}
                color={'white'}
                >Porque viste...</Heading>
            </Box>
            <Box 
                w={['310px', '400px', '750px', '900px', '1200px', '1700px']} 
                h={['220px', '250px', '300px']}
                bg='orange.100'
                display={'flex'}
                justifyContent={'flex-start'}
                alignItems={'center'}
                overflowX={'auto'}
                px={2}
                >
                  <HStack gap={5}>
                  {
                    data.map((e:any, i)=> (
                      <CardMovie key={i} image={e.image} title={e.title} vip={e.vip} price={e.price}  />
                    ))
                  }
                  </HStack>
            </Box>
        </Stack>
        <Stack direction={['column']} gap={'20px'}>
            <Box>
                <Heading 
                h={3}
                ml={2} 
                fontSize={'xl'}
                color={'white'}
                >Porque viste...</Heading>
            </Box>
            <Box 
                w={['310px', '400px', '750px', '900px', '1200px', '1700px']} 
                h={['220px', '250px', '300px']}
                bg='orange.100'
                display={'flex'}
                justifyContent={'flex-start'}
                alignItems={'center'}
                overflowX={'auto'}
                px={2}
                >
                  <HStack gap={5}>
                  {
                    data.map((e:any, i)=> (
                      <CardMovie key={i} image={e.image} title={e.title} vip={e.vip} price={e.price}  />
                    ))
                  }
                  </HStack>
            </Box>
        </Stack>
        <Stack direction={['column']} gap={'20px'}>
            <Box>
                <Heading 
                h={3}
                ml={2} 
                fontSize={'xl'}
                color={'white'}
                >Porque viste...</Heading>
            </Box>
            <Box 
                w={['310px', '400px', '750px', '900px', '1200px', '1700px']} 
                h={['220px', '250px', '300px']}
                bg='orange.100'
                display={'flex'}
                justifyContent={'flex-start'}
                alignItems={'center'}
                overflowX={'auto'}
                px={2}
                >
                  <HStack gap={5}>
                  {
                    data.map((e:any, i)=> (
                      <CardMovie key={i} image={e.image} title={e.title} vip={e.vip} price={e.price}  />
                    ))
                  }
                  </HStack>
            </Box>
        </Stack>
        <Stack direction={['column']} gap={'20px'}>
            <Box>
                <Heading 
                h={3}
                ml={2} 
                fontSize={'xl'}
                color={'white'}
                >Porque viste...</Heading>
            </Box>
            <Box 
                w={['310px', '400px', '750px', '900px', '1200px', '1700px']} 
                h={['220px', '250px', '300px']}
                bg='orange.100'
                display={'flex'}
                justifyContent={'flex-start'}
                alignItems={'center'}
                overflowX={'auto'}
                px={2}
                >
                  <HStack gap={5}>
                  {
                    data.map((e:any, i)=> (
                      <CardMovie key={i} image={e.image} title={e.title} vip={e.vip} price={e.price}  />
                    ))
                  }
                  </HStack>
            </Box>
        </Stack>



    </Stack>
  )
}

export default SectionMovieColumn