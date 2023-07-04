import { useDisclosure, Image, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Stack, Box } from '@chakra-ui/react'
import React from 'react'

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
}

function ModalMovieCard({id, title, description, release, duration, image, vip, price, isOpen, onClose}:Props) {

    return (
      <>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>{title}</ModalHeader>
            <ModalCloseButton />
            
            
            <ModalBody>
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
                h={'30%'}>
                {description}
            </Box>
            <Box
                w={'100%'}
                h={'10%'}>
                {price}
            </Box>
            </Stack>
            </ModalBody>
  
            
            
            
            
            <ModalFooter>
              <Button colorScheme='blue' variant={'outline'} mr={3} onClick={onClose}>
                Close
              </Button>
              <Button colorScheme='blue' >Comprar</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
      )
}

export default ModalMovieCard