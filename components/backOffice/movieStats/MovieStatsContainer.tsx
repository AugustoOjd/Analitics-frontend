import { Box, Heading, Stack } from '@chakra-ui/react'
import React from 'react'
import TableStatsCard from './TableStatsCard'

function MovieStatsContainer() {
  return (
    <Box
        bg={'green.100'}
        w={'100%'}
        h={['500px', '500px', '520px']}
        py={5}
        px={2}
    >
      <Stack
        w={'100%'}
      >
        <Heading
          fontSize={['md', 'lg', 'xl', '2xl']}
        >
          Products
        </Heading>

        <TableStatsCard/>

      </Stack>

    </Box>
  )
}

export default MovieStatsContainer