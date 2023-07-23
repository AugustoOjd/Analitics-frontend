import { useDisclosure, Spacer, Text, Image, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Stack, Box, HStack, Divider, Badge } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'

interface Props {
    isOpen: any
    onClose: any

    id:             number
    title:          string
    description:    string
    release:        string
    duration:       string
    image:          string
    vip:            boolean
    price:          number
    season:         number
}

function ModalMovieCard({id, title, description, release, duration, image, season, vip, price, isOpen, onClose}:Props) {

  let data = []
    for (let index = 1; index <= season; index++) {
      data.push(index)
    }
    
    return (
      <>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent
              bgGradient={[
                'linear(to-tr, gray.200, white)',
              ]}
          >
            <ModalHeader fontSize={['xl', '2xl', '3xl']}>{title}</ModalHeader>
            <ModalCloseButton />
            
            
            <ModalBody>
            <Stack 
            direction={['column']}
            gap={0}
            >
            <Box 
            >
                <Image 
                    src={image} 
                    alt={title} 
                    objectFit='fill' 
                    w={'100%'}
                    h={['250px', '300px', '320px']}
                    roundedTop={'md'}
                    />
            </Box>

            <Box
                w={'100%'}
                py={4}
                borderBottom={'1px'}
                borderColor={'orange.600'}
                // bg={'blue.300'}
                >
                <Text fontSize={['sm', 'md', 'lg', 'xl']}>
                  {description}
                </Text>
            </Box>

            <Box 
              // bg={'red.200'}
              >
              <HStack pt={2}>
                <Box
                mb={[2, 3, 4, 5]}
                >
                  {
                    season == 1
                    ?
                    <Text fontSize={['md', 'lg', 'xl']} fontWeight={'semibold'}>
                        <Badge fontSize={['md', 'lg', 'xl']} variant='outline' colorScheme='red'>
                          Movie
                        </Badge>
                    </Text>
                    :
                    <Box
                      display={'flex'}
                      justifyContent={'flex-start'}
                      alignItems={'center'}
                    >
                      <Text mr={[1, 1, 2, 2]}>
                        <Badge fontSize={['md', 'lg', 'xl']} variant={'outline'} colorScheme='orange'> Seasons: </Badge>
                      </Text>
                      <Text fontSize={['md', 'lg', 'xl']} fontWeight={'semibold'}>
                        { data.map((e:any)=> ( <Badge key={e} ml='1' fontSize={['12px', '15px', '18px']} colorScheme='orange'> {e} </Badge>))}
                      </Text>
                    </Box>
                  }
                  
                </Box>
              </HStack>
            </Box>

            <Box
                w={'100%'}
                display={'flex'}
                mb={[2, 3, 4, 5]}
                >
                  <Badge fontSize={['md', 'lg', 'xl']} mr={1} variant='outline' colorScheme='blue'>
                    Release:
                  </Badge>
                  <Text fontSize={['md', 'lg', 'xl']} fontWeight={'semibold'}>
                    {release}
                  </Text>
            </Box>

            <Box
              pb={[2, 3, 4, 5]}
              display={'flex'}
            >
                <Badge fontSize={['md', 'lg', 'xl']} mr={1} variant='outline' colorScheme='blue'>
                  Duration:
                </Badge>
                <Text fontSize={['md', 'lg', 'xl']} fontWeight={'semibold'}>
                  {duration}
                </Text>
            </Box>

            <Box
                w={'100%'}
                pt={[2, 4]}
                borderTop={'1px'}
                borderColor={'orange.600'}
                // bg={'orange.200'}
                >
                <HStack>
                  <Box>
                    {
                      vip
                      ?
                        <Text fontSize={['md', 'lg', 'xl']} fontWeight={'semibold'}>
                          <Badge fontSize={['md', 'lg', 'xl']} py={1} px={2} rounded={'sm'} variant='solid' colorScheme='purple'>
                            Premium
                          </Badge>
                        </Text>
                      :
                      <Text 
                        color={'orange.400'}
                        fontSize={['lg', 'xl', '2xl']}
                        fontWeight={'bold'}
                        >
                        <Badge fontSize={['md', 'lg', 'xl']} py={1} px={2} rounded={'sm'} variant='solid' colorScheme='orange'>
                          Free
                        </Badge>
                      </Text>
                    }

                  </Box>
                  
                  <Spacer/>
                  
                  <Box>
                    {
                      price == 0
                      ?
                      <Text>
                        
                      </Text>
                      :
                      <Text fontSize={'xl'} fontWeight={'bold'} color={'orange.400'}>
                        <Badge fontSize={['md', 'lg', 'xl']} py={1} px={2} rounded={'sm'} colorScheme='green'>
                          $ {price}
                        </Badge>
                      </Text>
                    }
                  </Box>
                </HStack>
            </Box>
            </Stack>
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' variant={'outline'} mr={3} onClick={onClose}>
                Close
              </Button>
              
              <Button colorScheme='blue' onClick={()=> console.log(id)} > { vip ? 'Comprar' : 'Ver' }</Button>
            
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
      )
}

export default ModalMovieCard