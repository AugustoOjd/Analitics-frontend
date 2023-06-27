import { Box, Divider, HStack, Heading, Stack, Text } from '@chakra-ui/react'
import React, { useState } from 'react'

const data = [
    {
        title: 'Movie Analitic',
        description: 'App de peliculas y series para interactuar y mirar detalles'
    },
    {
        title: 'Interaciones',
        description: 'Las interaciones son muy importantes para probar la aplicacion'
    },
    {
        title: 'Sugerencias',
        description: 'Cada usuario tendran sus sugerencias personalizada dependiendo el uso'
    }
]

function FooterGrid() {

  return (
    <HStack spacing={[2, '15px', '50px', '100px']}>
        {
            data.map((e:any)=> (
                <Box w={['100px', '150px', '200px']} h={['160px', '130px', '150px']} bg='white' borderWidth='1px' borderRadius='lg'>
                <Stack p={1}>
                    <Heading as='h6' size='xs'>
                        {e.title}
                    </Heading>
                    <Divider />
                    <Text fontSize='xs'>
                        {e.description}
                    </Text>
                </Stack>
              </Box>
            ))
        }
    </HStack>
  )
}

export default FooterGrid