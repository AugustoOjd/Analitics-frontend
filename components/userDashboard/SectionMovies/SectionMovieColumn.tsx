import { Box, HStack, Heading, Spinner, Stack, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import CardMovie from './CardMovie'
import axios from 'axios'

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


function SectionMovieColumn() {

  const [actionMovies, setActionMovies] = useState([])
  const [dramaMovies, setDramaMovies] = useState([])
  const [terrorMovies, setTerrorMovies] = useState([])
  const [fantasyMovies, setFantasyMovies] = useState([])

  async function getActionMovies() {
    try {
      const response = await axios.get('http://localhost:8080/api/movie?category=action&limit=10');
      console.log(response.data.payload);
      setActionMovies(response.data.payload)
    } catch (error) {
      setActionMovies([])
      console.error(error);
    }
  }
  
  async function getDramaMovies() {
    try {
      const response = await axios.get('http://localhost:8080/api/movie?category=drama&limit=10');
      console.log(response.data.payload);
      setDramaMovies(response.data.payload)
    } catch (error) {
      setDramaMovies([])
      console.error(error);
    }
  }

  async function getTerrorMovies() {
    try {
      const response = await axios.get('http://localhost:8080/api/movie?category=terror&limit=10');
      console.log(response.data.payload);
      setTerrorMovies(response.data.payload)
    } catch (error) {
      setTerrorMovies([])
      console.error(error);
    }
  }

  async function getFantasyMovies() {
    try {
      const response = await axios.get('http://localhost:8080/api/movie?category=fantasy&limit=10');
      console.log(response.data.payload);
      setFantasyMovies(response.data.payload)
    } catch (error) {
      setFantasyMovies([])
      console.error(error);
    }
  }


  useEffect(() => {
    getActionMovies()
    getDramaMovies()
    getTerrorMovies()
    getFantasyMovies()
  }, [])

  
  
  
  return (
    <>
    <Stack direction={['column']} spacing='24px'>
              {/* <Stack direction={['column']} gap={'20px'}>
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
        </Stack> */}
        <Stack direction={['column']} gap={'20px'}>
            <Box>
                <Heading 
                h={3}
                ml={2} 
                fontSize={'xl'}
                color={'white'}
                >Action</Heading>
            </Box>
            <Box 
                w={['310px', '400px', '750px', '900px', '1200px', '1700px']} 
                h={['240px', '250px', '300px']}
                bg='orange.100'
                display={'flex'}
                justifyContent={'flex-start'}
                alignItems={'center'}
                overflowX={'auto'}
                px={2}
                >
                  <HStack gap={5}>
                  {
                    actionMovies.length <= 0
                    ?
                    <Spinner />
                    :
                    actionMovies.map((e:any, i)=> (
                      <CardMovie key={e.id} image={e.image} description={e.description} title={e.title} vip={e.premium} price={e.price} id={e.movieId} />
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
                >Drama</Heading>
            </Box>
            <Box 
                w={['310px', '400px', '750px', '900px', '1200px', '1700px']} 
                h={['240px', '250px', '300px']}
                bg='orange.100'
                display={'flex'}
                justifyContent={'flex-start'}
                alignItems={'center'}
                overflowX={'auto'}
                px={2}
                >
                  <HStack gap={5}>
                  {
                    dramaMovies.length <= 0
                    ?
                    <Spinner />
                    :
                    dramaMovies.map((e:any, i)=> (
                      <CardMovie key={e.id} image={e.image}  description={e.description} title={e.title} vip={e.premium} price={e.price} id={e.movieId} />
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
                >Terror</Heading>
            </Box>
            <Box 
                w={['310px', '400px', '750px', '900px', '1200px', '1700px']} 
                h={['240px', '250px', '300px']}
                bg='orange.100'
                display={'flex'}
                justifyContent={'flex-start'}
                alignItems={'center'}
                overflowX={'auto'}
                px={2}
                >
                  <HStack gap={5}>
                  {
                    terrorMovies.length <= 0
                    ?
                    <Spinner />
                    :
                    terrorMovies.map((e:any)=> (
                      <CardMovie key={e.id} image={e.image}  description={e.description} title={e.title} vip={e.premium} price={e.price} id={e.movieId}  />
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
                >Fantasy</Heading>
            </Box>
            <Box 
                w={['310px', '400px', '750px', '900px', '1200px', '1700px']} 
                h={['240px', '250px', '300px']}
                bg='orange.100'
                display={'flex'}
                justifyContent={'flex-start'}
                alignItems={'center'}
                overflowX={'auto'}
                px={2}
                >
                  <HStack gap={5}>
                  {
                    fantasyMovies.length <= 0
                    ?
                    <Spinner />
                    :
                    fantasyMovies.map((e:any, i)=> (
                      <CardMovie key={e.id} image={e.image}  description={e.description} title={e.title} vip={e.premium} price={e.price} id={e.movieId}  />
                    ))
                  }
                  </HStack>
            </Box>
        </Stack>

    </Stack>


    </>
  )
}

export default SectionMovieColumn