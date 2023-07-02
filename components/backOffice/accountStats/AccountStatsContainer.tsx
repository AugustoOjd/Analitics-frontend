import { Box } from '@chakra-ui/react'
import React from 'react'
import AccountStatsCard from './AccountStatsCard'

function AccountStatsContainer() {
  return (
    <Box
    bg={'red.100'}
    w={'100%'}
    h={['300px', '300px', '350px']}
    >
        <AccountStatsCard/>
    </Box>
  )
}

export default AccountStatsContainer