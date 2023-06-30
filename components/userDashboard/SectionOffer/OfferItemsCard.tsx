import { Box, Text } from '@chakra-ui/react'
import React from 'react'

interface Props {
    icon: any,
    save: number,
    cost: number
}

function OfferItemsCard({icon, save, cost}:Props) {
  
    return (
    <>
    <Box 
        w={['80px']} 
        h={['100%']} 
        display={'flex'}
        flexDirection={'column'}
        justifyContent={['space-evenly', 'space-evenly']}
        alignItems={'center'}
        >
        <Text color={'gray.900'} fontSize={['xs', 'xs', 'sm', 'md']} fontWeight={'bold'}>Sin Limite</Text>
        <Text fontSize={['2xl', '2xl', '3xl', '4xl']} color={'gray.900'}>
            {icon}
        </Text>
    </Box>
    <Box 
        w={'80px'} 
        h={['100%']} 
        display={'flex'}
        flexDirection={'column'}
        justifyContent={'space-evenly'}
        alignItems={'center'}
        >
        <Text color={'gray.900'} fontSize={['xs', 'xs', 'sm', 'md']} fontWeight={'bold'}>Ahorras</Text>
        <Box display={'flex'}>
            <Text fontSize={['2xl', '2xl', '3xl', '4xl']} fontWeight={'bold'} color={'whatsapp.400'}  textDecoration={'line-through'} textDecorationColor={'gray.900'}>
                $
            </Text>
            <Text fontSize={['2xl', '2xl', '3xl', '4xl']} color={'gray.400'} fontWeight={'bold'} textDecoration={'line-through'} textDecorationColor={'gray.900'}>
                {save}
            </Text>
        </Box>
    </Box>
    <Box 
        w={'80px'} 
        h={['100%']} 
        display={'flex'}
        flexDirection={'column'}
        justifyContent={'space-evenly'}
        alignItems={'center'}
        >
        <Text color={'gray.900'} fontSize={['xs', 'xs', 'sm', 'md']} fontWeight={'bold'}>Por Solo</Text>
        <Box display={'flex'}>
            <Text fontSize={['2xl', '2xl', '4xl', '5xl']}  fontWeight={'bold'} color={'whatsapp.400'}>
                $
            </Text>
            <Text fontSize={['2xl', '2xl', '4xl', '5xl']} color={'#ff5722'} fontWeight={'bold'} textDecoration={'underline'} >
                {cost}
            </Text>
        </Box>

    </Box>
    </>
  )
}

export default OfferItemsCard