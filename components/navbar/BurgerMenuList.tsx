import { ArrowDownIcon, ArrowForwardIcon, CloseIcon, HamburgerIcon } from '@chakra-ui/icons'
import { Box, Button, Divider, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, StackDivider, VStack, useDisclosure } from '@chakra-ui/react'
import React, { useRef, useState } from 'react'

function BurgerMenuList() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef<HTMLButtonElement>(null)

    const [isOpenCategory, setIsOpenCategory] = useState(false)
    const [isOpenMovies, setIsOpenMovies] = useState(false)
  
  return (
    <>
    <Button ref={btnRef} colorScheme='gray' onClick={onOpen}>
    {isOpen ? <CloseIcon/>  : <HamburgerIcon/>}
    </Button>
        <Drawer
            isOpen={isOpen}
            placement='left'
            onClose={onClose}
            finalFocusRef={btnRef}
            size={'xs'}
        >
            <DrawerOverlay />
            <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader color={'blue.500'}>Book Analitic</DrawerHeader>
            <Divider/>

            <DrawerBody>
                <VStack
                spacing={4}
                align='stretch'
                >
                <Box h='40px' 
                    display={'flex'} 
                    justifyContent={'flex-start'} 
                    alignItems={'center'}

                    >
                    <Button colorScheme='gray.800' size='lg' rightIcon={<ArrowForwardIcon />} variant='link'>
                        Home
                    </Button>
                </Box>
                
                <Divider borderColor='gray.400' />
                
                <Box h='40px'>
                    <Button 
                        colorScheme='gray.800' 
                        size='lg' 
                        rightIcon={isOpenCategory ? <ArrowDownIcon/> :  <ArrowForwardIcon />} 
                        variant='link'
                        onClick={()=> setIsOpenCategory(!isOpenCategory)}
                        >
                        Category
                    </Button>
                </Box>
                
                <Divider borderColor='gray.400' />
                
                <Box display={isOpenCategory ? 'block' : 'none'}>
                    <VStack
                    divider={<StackDivider borderColor='gray.200' />}
                    spacing={4}
                    align='stretch'
                    >
                        <Box h='30px'>
                            <Box h='30px' >
                                <Button 
                                colorScheme='gray' 
                                variant='link'
                                size={'md'}
                                >
                                Action
                                </Button>
                            </Box>
                        </Box>
                        <Box h='30px'>
                            <Box h='30px' >
                                <Button 
                                colorScheme='gray' 
                                variant='link'
                                size={'md'}
                                >
                                Drama
                                </Button>
                            </Box>
                        </Box>
                        <Box h='30px'>
                            <Box h='30px' >
                                <Button 
                                colorScheme='gray' 
                                variant='link'
                                size={'md'}
                                >
                                Fantasy
                                </Button>
                            </Box>
                        </Box>
                    </VStack>
                </Box>
                
                <Box h='40px'>
                    <Button 
                        colorScheme='gray.800' 
                        size='lg' 
                        rightIcon={isOpenMovies ? <ArrowDownIcon/> :  <ArrowForwardIcon />} 
                        variant='link'
                        onClick={()=> setIsOpenMovies(!isOpenMovies)}
                        >
                        Movies
                    </Button>
                </Box>

                <Box display={isOpenMovies ? 'block' : 'none'}>
                    <VStack
                    divider={<StackDivider borderColor='gray.300' />}
                    spacing={4}
                    align='stretch'
                    >
                        <Box h='30px' >
                            <Button 
                            colorScheme='gray' 
                            variant='link'
                            size={'md'}
                            >
                            Free
                            </Button>
                        </Box>

                        <Box h='30px' pl={1}>
                            <Button 
                            colorScheme='gray' 
                            variant='link'
                            size={'md'}
                            >
                            Premium
                            </Button>
                        </Box>
                    </VStack>
                </Box>
                
                </VStack>
            </DrawerBody>

            <DrawerFooter>
                <Button colorScheme='blue'>Logout</Button>
            </DrawerFooter>
            </DrawerContent>
        </Drawer>
    </>
  )
}

export default BurgerMenuList