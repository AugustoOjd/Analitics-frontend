import { Box } from '@chakra-ui/react'
import React from 'react'
import AccountStatsContainer from './accountStats/AccountStatsContainer'
import MovieStatsContainer from './movieStats/MovieStatsContainer'

function BackOfficeContainer() {
  return (
    <Box>
        <AccountStatsContainer/>
        <MovieStatsContainer/>
    </Box>
  )
}

export default BackOfficeContainer