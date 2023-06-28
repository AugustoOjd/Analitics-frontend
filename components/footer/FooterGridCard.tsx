import { Stack, Heading, Divider, Box, Text } from '@chakra-ui/react'
import React, {FC} from 'react'

interface Props {
    title: string,
    description: string
}

function FooterGridCard({title, description}:Props) {
  return (
    <Box w={['280px', '150px', '200px', '250px']} h={['110px', '150px', '150px', '180px']} bg='white'
    borderWidth='1px' 
    borderRadius='md' 
    boxShadow={'lg'}
    borderColor={'cyan.800'}
    >
        <Stack p={2}>
            <Box display={'flex'} justifyContent={'flex-start'} alignItems={'center'}>
                <Heading as='h6' size={['xs', 'xs', 'sm', 'md']}>
                    {title}
                </Heading>
            </Box>
            <Divider />
            <Box display={'flex'} justifyContent={'flex-start'} alignItems={'center'}>
                <Text fontSize={['xs', 'xs', 'sm', 'md']}>
                    {description}
                </Text>
            </Box>
        </Stack>
    </Box>
  )
}

export default FooterGridCard