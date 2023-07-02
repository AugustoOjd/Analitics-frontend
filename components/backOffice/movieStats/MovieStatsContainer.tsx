import { Box } from '@chakra-ui/react'
import React from 'react'
import TableStatsCard from './TableStatsCard'

function MovieStatsContainer() {
  return (
    <Box
        bg={'green.100'}
        w={'100%'}
        h={'480px'}
        py={5}
        px={2}
    >
        <TableStatsCard/>
    </Box>
  )
}

export default MovieStatsContainer