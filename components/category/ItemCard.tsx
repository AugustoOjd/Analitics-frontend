import { ArrowForwardIcon } from '@chakra-ui/icons'
import { Box, GridItem, Stack, Image, Text, Spacer, Button, HStack } from '@chakra-ui/react'
import React from 'react'

interface Props {
    title:  string,
    image:  string,
    vip:    boolean,
    price:  number,
    
}

function ItemCard({title, image, vip, price}:Props) {
  return (
    <GridItem w='100%' h={['300px', '360px', '370px', '380px', '420px']}>
            <Box 
                bg={'white'}
                w={['100%' ]}
                h={['100%' ]}
                rounded={'md'}
                boxShadow={'sm'}>
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
    </GridItem>
  )
}

export default ItemCard