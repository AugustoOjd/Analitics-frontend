import { Box } from '@chakra-ui/react'
import React from 'react'
import OfferContainer from './SectionOffer/OfferContainer'
import SectionMoviesContainer from './SectionMovies/SectionMoviesContainer'

function DashboardContainer() {
  return (
    <Box>
        <OfferContainer/>
        <SectionMoviesContainer/>
    </Box>
  )
}

export default DashboardContainer