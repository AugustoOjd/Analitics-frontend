'use client'

import { Box, Spinner } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import OfferContainer from './SectionOffer/OfferContainer'
import SectionMoviesContainer from './SectionMovies/SectionMoviesContainer'
import { useSelector } from 'react-redux'
import { RootState } from '@/store/store'
import { useRouter } from 'next/navigation'

function DashboardContainer() {

  const login = useSelector((state:RootState)=> state.auth.login)
  const router = useRouter()

  const [isCheking, setIsCheking] = useState(true)

  useEffect(() => {
    if(!login) return router.replace('/')
  }, [])

  const checkingUser = ()=>{
    setTimeout(() => {
      setIsCheking(false)
    }, 2000);
  }

  useEffect(() => {
    checkingUser()
  }, [])
  

  return (
    <>
    {
      isCheking
      ?
      <Box bg={'white'} h={'700px'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
        <Spinner
          thickness='4px'
          speed='0.65s'
          emptyColor='gray.200'
          color='blue.500'
          size='xl'
        />
      </Box>
      :
      <Box>
          <OfferContainer/>
          <SectionMoviesContainer/>
      </Box> 
    }
    
    </>
  )
}

export default DashboardContainer