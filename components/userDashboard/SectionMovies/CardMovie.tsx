import { Box, Stack } from '@chakra-ui/react'
import React from 'react'

interface Props {
    image: string,
    title: string,
    vip: boolean,
    price: number
}

function CardMovie() {
  return (
    <Box 
    bg={'white'}
    w={['230px']}
    h={['200px']}
    rounded={'md'}
    boxShadow={'md'}
    >
        <Stack 
            direction={['column']}
            gap={0}
            h={'100%'}
            >
            <Box 
                bg={'blue.200'}
                w={'100%'}
                h={'55%'}
            >
asd
            </Box>
            <Box
                bg={'green.200'}
                w={'100%'}
                h={'25%'}
            >
                asd
            </Box>
            <Box
                bg={'red.200'}
                w={'100%'}
                h={'20%'}
            >
            asd
            </Box>
        </Stack>
    </Box>
  )
}

export default CardMovie