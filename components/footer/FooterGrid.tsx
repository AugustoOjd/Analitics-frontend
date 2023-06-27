import { Box, Divider, HStack, Heading, Stack, Text } from '@chakra-ui/react'
import React, { useState } from 'react'

const data = [
    {
        title: 'Movie Analitic',
        description: 'Es una app de peliculas y series, puede simular una subscripcion o comprar peliculas'
    },
    {
        title: 'Interaciones',
        description: 'Las interaciones son muy importantes para probar la aplicacion, forman parte de las estadisticas de la app.'
    },
    {
        title: 'Sugerencias',
        description: 'Cada usuario tendran sus sugerencias personalizada dependiendo las interacciones y compras.'
    }
]

function FooterGrid() {

  return (
    <Stack direction={['column', 'row']} spacing={[3, '15px', '50px', '100px']}>
        {
            data.map((e:any)=> (
                <Box w={['280px', '150px', '200px', '250px']} h={['110px', '150px', '150px', '180px']} bg='white'
                    borderWidth='1px' 
                    borderRadius='md' 
                    boxShadow={'lg'}
                    borderColor={'cyan.800'}
                    >
                <Stack p={2}>
                    <Box display={'flex'} justifyContent={'flex-start'} alignItems={'center'}>
                        <Heading as='h6' size='xs'>
                            {e.title}
                        </Heading>
                    </Box>
                    <Divider />
                    <Box display={'flex'} justifyContent={'flex-start'} alignItems={'center'}>
                        <Text fontSize='xs'>
                            {e.description}
                        </Text>
                    </Box>
                </Stack>
              </Box>
            ))
        }
    </Stack>
  )
}

export default FooterGrid