'use client'

import { Box } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import OfferContainer from './SectionOffer/OfferContainer'
import SectionMoviesContainer from './SectionMovies/SectionMoviesContainer'
import { useSelector } from 'react-redux'
import { RootState } from '@/store/store'
import { useRouter } from 'next/navigation'

function DashboardContainer() {

  const login = useSelector((state:RootState)=> state.auth.login)
  const router = useRouter()

  useEffect(() => {
    if(!login) return router.replace('/')
  }, [])
  
  return (
    <Box>
        <OfferContainer/>
        <SectionMoviesContainer/>
    </Box>
  )
}

export default DashboardContainer