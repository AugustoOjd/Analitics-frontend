'use client'

import { Box, Spinner } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import OfferContainer from './SectionOffer/OfferContainer'
import SectionMoviesContainer from './SectionMovies/SectionMoviesContainer'
import { useSelector } from 'react-redux'
import { RootState } from '@/store/store'
import { useRouter } from 'next/navigation'
import BackOfficeContainer from '../backOffice/BackOfficeContainer'

function DashboardContainer() {

  const {login, user} = useSelector((state:RootState)=> state.auth)
  const router = useRouter()

  const [isCheking, setIsCheking] = useState(true)

  useEffect(() => {
    if(!login) return router.replace('/')
  }, [])

  const checkingUser = ()=>{
    if(user){
      setIsCheking(false)
    }
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