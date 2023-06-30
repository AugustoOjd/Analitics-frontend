import { ArrowForwardIcon } from '@chakra-ui/icons'
import { Box, Stack, Image, HStack,Text, Button, Spacer } from '@chakra-ui/react'
import React from 'react'

interface Props {
    image: string,
    title: string,
    vip: boolean,
    price: number
}

function CardMovie({image, title, vip, price}:Props) {
  return (
    <Box 
    bg={'white'}
    w={['230px', '250px', '250px', '250px', '260px']}
    h={['200px', '230px', '270px', '280px', '280px']}
    rounded={'md'}
    boxShadow={'sm'}
    >
        <Stack 
            direction={['column']}
            gap={0}
            h={'100%'}
            >
            <Box 
                w={'100%'}
                h={'60%'}
            >
                <Image 
                    src={image} 
                    alt='Dan Abramov' 
                    objectFit='fill' 
                    w={'100%'}
                    h={'100%'}
                    roundedTop={'md'}
                    />
            </Box>
            <Box
                w={'100%'}
                h={'20%'}
                boxShadow={'sm'}
                display={'flex'}
                justifyContent={'flex-start'}
                alignItems={'center'}
                pl={2}
            >
                <Text fontSize={'lg'} fontWeight={'semibold'}>
                    {title}
                </Text>
            </Box>
            <Box
                w={'100%'}
                h={'15%'}
            >
                <HStack spacing='5px'>
                    <Box w={['70px']} display={'flex'} justifyContent={'flex-start'} alignItems={'center'} pl={2} >
                        <Text fontSize={'xl'} fontWeight={'semibold'}>
                            {vip ? 'Preium' : 'Free'}
                        </Text>
                    </Box>
                    <Box w={['70px']} display={'flex'} justifyContent={'flex-start'} alignItems={'center'}>
                        <Text fontSize={'xl'} fontWeight={'semibold'}>
                            ${price}
                        </Text>
                    </Box>
                    <Spacer/>
                    <Box display={'flex'} justifyContent={'flex-start'} alignItems={'center'} pr={1}>
                        <Button colorScheme='blue' variant='solid' size={'sm'} rightIcon={<ArrowForwardIcon />}>
                            View
                        </Button>
                    </Box>
                </HStack>
            </Box>
        </Stack>
    </Box>
  )
}

export default CardMovie