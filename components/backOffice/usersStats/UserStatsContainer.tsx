import { Box, Heading, Stack } from '@chakra-ui/react'
import React from 'react'
import TableStatsUser from './TableStatsUser'

function UserStatsContainer() {
  return (
    <Box
        bg={'red.100'}
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
          Users
        </Heading>

        <TableStatsUser/>

      </Stack>

    </Box>
  )
}

export default UserStatsContainer