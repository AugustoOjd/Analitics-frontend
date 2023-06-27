import { Box, Divider, HStack, Heading, Stack, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import FooterGridCard from './FooterGridCard'

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
                <FooterGridCard key={e.index} title={e.title} description={e.description}/>
            ))
        }
    </Stack>
  )
}

export default FooterGrid