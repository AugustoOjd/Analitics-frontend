import { Box, Stack, Avatar, Spacer, Text } from '@chakra-ui/react';
import React from 'react'

function AccountStatsCard() {
  return (
    <Stack 
        h={'100%'}
        p={4}
        >
        <Stack 
            spacing={'15px'}
            direction={['row', 'row', 'column']}
            >
            <Box
                bg={'gray.100'}
                h={['20px']}
                w={['70px']}
                display={'flex'}
                justifyContent={'flex-start'}
                alignItems={'center'}
            >
                <Box h={5} w={5} bg={'orange.800'}></Box>
                    <Text 
                        pl={2}
                        fontSize={'md'}
                    >
                        All
                    </Text>
            </Box>
            <Box
                bg={'gray.100'}
                h={['20px']}
                w={['70px']}
                display={'flex'}
                justifyContent={'flex-start'}
                alignItems={'center'}
            >
                <Box h={5} w={5} bg={'orange.800'}></Box>
                    <Text 
                        pl={2}
                        fontSize={'md'}
                    >
                        All
                    </Text>
            </Box>
            <Box
                bg={'gray.100'}
                h={['20px']}
                w={['70px']}
                display={'flex'}
                justifyContent={'flex-start'}
                alignItems={'center'}
            >
                <Box h={5} w={5} bg={'orange.800'}></Box>
                    <Text 
                        pl={2}
                        fontSize={'md'}
                    >
                        All
                    </Text>
            </Box>
        </Stack>
        
        <Spacer/>
        
        <Box
            bg={'blue.100'}
            h={['200px']}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
        >
            <Box 
                bg={'blue.500'} 
                h={'200px'}
                w={'200px'}
                rounded={'full'}
                />
            
            </Box>
    </Stack>
  )
}

export default AccountStatsCard