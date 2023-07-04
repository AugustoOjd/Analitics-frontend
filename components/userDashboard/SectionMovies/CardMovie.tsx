import { ArrowForwardIcon } from '@chakra-ui/icons'
import { Box, Stack, Image, HStack,Text, Button, Spacer, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import ModalMovieCard from './ModalMovieCard'

interface Props {
    id?:             number
    title:          string
    description?:    string
    release?:        string
    duration?:       string
    image:          string
    vip:            boolean
    price:          number

}

function CardMovie({id, image, title, description, release, duration, vip, price}:Props) {

    const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
    <ModalMovieCard 
        id={id!} 
        title={title} 
        image={image} 
        description={description!}
        price={price} 
        release={release!}
        vip={vip} 
        duration={duration!} 
        isOpen={isOpen} 
        onClose={onClose}/>
    <Box 
    bg={'white'}
    w={['230px', '250px', '250px', '250px', '260px']}
    h={['220px', '230px', '270px', '280px', '280px']}
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
                <Text fontSize={'md'} fontWeight={'semibold'}>
                    {title}
                </Text>
            </Box>
            <Box
                w={'100%'}
                h={'15%'}
            >
                <HStack spacing={[2]}>
                    <Box w={['70px']} display={'flex'} justifyContent={'flex-start'} alignItems={'center'} pl={2} >
                        {
                            vip
                            ?
                            <Box bg={'purple.600'} py={1} px={2} rounded={'md'}>
                                <Text fontSize={['sm', 'md']} color={'white'} fontWeight={'semibold'}>
                                    Premium
                                </Text>
                            </Box>
                            :
                            <Box bg={'orange.600'} py={1} px={2} rounded={'md'}>
                                <Text fontSize={['md', 'md']} color={'white'} fontWeight={'semibold'}>
                                    Free
                                </Text>
                            </Box>
                        }
                    </Box>
                    
                    <Box w={['70px']} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                        <Text fontSize={['lg']} fontWeight={'semibold'}>
                            {
                                price == 0
                                ?
                                ''
                                :
                                `$${price}`
                            }
                        </Text>
                    </Box>
                    {/* <Spacer/> */}
                    
                    <Box display={'flex'} justifyContent={'flex-start'} alignItems={'center'} pr={2}>
                        <Button 
                            colorScheme='blue' 
                            variant='solid' 
                            size={['sm', 'md']} 
                            rightIcon={<ArrowForwardIcon 
                            onClick={()=>onOpen()}
                            />}>
                            View
                        </Button>
                    </Box>
                </HStack>
            </Box>
        </Stack>
    </Box>



    </>
  )
}

export default CardMovie