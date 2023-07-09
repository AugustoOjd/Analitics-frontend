'use client'

import { userApi } from '@/api/usersApi'
import { logout } from '@/features/auth/userSlice'
import { ArrowDownIcon, ArrowForwardIcon, CloseIcon, HamburgerIcon } from '@chakra-ui/icons'
import { Avatar, Box, Button, Divider, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Flex, Spacer, StackDivider, VStack, useDisclosure } from '@chakra-ui/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux'

function BurgerMenuList() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef<HTMLButtonElement>(null)

    const [isOpenCategory, setIsOpenCategory] = useState(false)
    const [isOpenMovies, setIsOpenMovies] = useState(false)

    const router = useRouter()

    const dispatch = useDispatch()
  
    const logoutAndHome = async ()=>{
        try {
          await userApi.get('/logout')
          dispatch(logout())
      
          return router.replace('/')
        } catch (error) {
          console.log(error)
        }
      }

  return (
    <>
    <Flex>
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
                        <Link href="/dashboard">Home</Link>
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
                                    <Link href={'/movies/action'}>
                                        Action
                                    </Link>
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
                                    <Link href={'/movies/drama'}>
                                        Drama
                                    </Link>
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
                                    <Link href={'/movies/terror'}>
                                        Terror
                                    </Link>
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
                                    <Link href={'/movies/fantasy'}>
                                        Fantasy
                                    </Link>
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
                            <Link href={'/movies/free'}>
                                    Free
                                </Link>
                            </Button>
                        </Box>

                        <Box h='30px' pl={1}>
                            <Button 
                            colorScheme='gray' 
                            variant='link'
                            size={'md'}
                            >
                                <Link href={'/movies/premium'}>
                                    Premium
                                </Link>
                            </Button>
                        </Box>
                    </VStack>
                </Box>
                
                </VStack>
            </DrawerBody>

            <DrawerFooter>
                    <Button colorScheme='blue' onClick={()=> logoutAndHome()}>
                        Logout
                    </Button>
            </DrawerFooter>
            </DrawerContent>
        </Drawer>

        <Spacer/>
            <Box w={['auto']} h='40px'>
                <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
            </Box>
        </Flex>
    </>
  )
}

export default BurgerMenuList