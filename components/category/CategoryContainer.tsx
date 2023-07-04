import { Box, Grid, GridItem, Heading } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ItemCard from './ItemCard'

interface Props {
    category: any
}

function CategoryContainer({category}:Props) {
  
    const [actionMovies, setActionMovies] = useState([])
    const [dramaMovies, setDramaMovies] = useState([])
    const [terrorMovies, setTerrorMovies] = useState([])
    const [fantasyMovies, setFantasyMovies] = useState([])
    const [freeMovies, setFreeMovies] = useState([])
    const [premiumMovie, setpremiumMovie] = useState([])

  
    async function getActionMovies() {
      try {
        const response = await axios.get(`http://localhost:8080/api/movie?category=${category}&limit=10`);
        console.log(response.data.payload);
        setActionMovies(response.data.payload)
      } catch (error) {
        setActionMovies([])
        console.error(error);
      }
    }
    
    async function getDramaMovies() {
      try {
        const response = await axios.get(`http://localhost:8080/api/movie?category=${category}&limit=10`);
        console.log(response.data.payload);
        setDramaMovies(response.data.payload)
      } catch (error) {
        setDramaMovies([])
        console.error(error);
      }
    }
  
    async function getTerrorMovies() {
      try {
        const response = await axios.get(`http://localhost:8080/api/movie?category=${category}&limit=10`);
        console.log(response.data.payload);
        setTerrorMovies(response.data.payload)
      } catch (error) {
        setTerrorMovies([])
        console.error(error);
      }
    }
  
    async function getFantasyMovies() {
      try {
        const response = await axios.get(`http://localhost:8080/api/movie?category=${category}&limit=10`);
        console.log(response.data.payload);
        setFantasyMovies(response.data.payload)
      } catch (error) {
        setFantasyMovies([])
        console.error(error);
      }
    }

      
    async function getFreeMovies() {
        try {
          const response = await axios.get(`http://localhost:8080/api/movie?vip=0&limit=10`);
          console.log(response.data.payload);
          setFreeMovies(response.data.payload)
        } catch (error) {
          setFreeMovies([])
          console.error(error);
        }
      }

      async function getPremiumMovies() {
        try {
          const response = await axios.get(`http://localhost:8080/api/movie?vip=1&limit=10`);
          console.log(response.data.payload);
          setpremiumMovie(response.data.payload)
        } catch (error) {
          setpremiumMovie([])
          console.error(error);
        }
      }
  
  
    useEffect(() => {
      getActionMovies()
      getDramaMovies()
      getTerrorMovies()
      getFantasyMovies()
      getFreeMovies()
      getPremiumMovies()
    }, [])
  
    return (
    <Box
        bg={'gray.700'}
        w={'100%'}
        h={['1000px', '1000px', '1000px', '1200px']}
        p={[3, 3, 4, 6]}
        overflowY={'auto'}
    >
        <Box mb={[2, 4, 5, 6]}>
            <Heading color={'white'}>
                {category.toUpperCase()}
            </Heading>
        </Box>

        <Grid templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(3, 1fr)', 'repeat(5, 1fr)']} gap={3}>
                {
                    category == 'action' && actionMovies.map((e:any)=> (<ItemCard image={e.image} title={e.title} price={e.price} vip={e.premium}/>))
                    ||
                    category == 'drama' && dramaMovies.map((e:any)=> (<ItemCard image={e.image} title={e.title} price={e.price} vip={e.premium}/>))
                    ||
                    category == 'terror' && terrorMovies.map((e:any)=> (<ItemCard image={e.image} title={e.title} price={e.price} vip={e.premium}/>))
                    ||
                    category == 'fantasy' && fantasyMovies.map((e:any)=> (<ItemCard image={e.image} title={e.title} price={e.price} vip={e.premium}/>))
                    ||
                    category == 'free' && freeMovies.map((e:any)=> (<ItemCard image={e.image} title={e.title} price={e.price} vip={e.premium}/>))
                    ||
                    category == 'premium' && premiumMovie.map((e:any)=> (<ItemCard image={e.image} title={e.title} price={e.price} vip={e.premium}/>))
                }
        </Grid>
    </Box>
  )
}

export default CategoryContainer