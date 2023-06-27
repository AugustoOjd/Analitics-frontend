import { ArrowForwardIcon } from '@chakra-ui/icons'
import { Box, Button, Heading } from '@chakra-ui/react'
import React, { useState } from 'react'

interface Props {
    children: React.ReactNode, 
    title: string,
    changeForm: React.ReactNode
}

const CardForm = ({children, title, changeForm}:Props) => {

  return (
    <Box w={[260, 260, 350, 400]}>
        <Box mb={2} display={'flex'} justifyContent={'flex-end'}>
            {changeForm}
        </Box>
    <Box w={[260, 260, 350, 400]} h={[380, 380, 380, 400]} 
        bgColor={'white'}
        p={3} 
        rounded={6} 
        boxShadow={'lg'}
        >
        <Box mb={3} display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
            <Heading as='h5' size='md'>
                {title}
            </Heading>
        </Box>
        <Box>
            {children}
        </Box>

    </Box>

    </Box>
  )
}

export default CardForm