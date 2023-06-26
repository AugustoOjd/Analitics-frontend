import { Box, Button, Heading } from '@chakra-ui/react'
import React from 'react'

interface Props {
    children: React.ReactNode, 
    title: string,
    navigate: string
}

const CardForm = ({children, title, navigate}:Props) => {
  return (
    <Box w={[270, 270, 350]} h={[400]} bgColor={'white'} borderWidth={2} p={3} rounded={6} boxShadow={'lg'}>
        <Box mb={3} display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
            <Heading as='h5' size='md'>
                {title}
            </Heading>
            <Button
                mt={4}
                colorScheme='teal'
                type='submit'
            >
                {navigate} --
            </Button>
        </Box>
        <Box>
            {children}
        </Box>

    </Box>
  )
}

export default CardForm