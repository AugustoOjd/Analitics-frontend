import { Box, Grid, GridItem, Heading } from '@chakra-ui/react'
import React from 'react'

interface Props {
    category: any
}

function CategoryContainer({category}:Props) {
  
  
    return (
    <Box
        bg={'gray.700'}
        w={'100%'}
        h={['800px', '800px', '1000px', '1200px']}
        p={[3, 3, 4, 6]}
    >
        <Box mb={[2, 4, 5, 6]}>
            <Heading color={'white'}>
                {category.category.toUpperCase()}
            </Heading>
        </Box>

        <Grid templateColumns={['repeat(2, 1fr)', 'repeat(3, 1fr)', 'repeat(4, 1fr)', 'repeat(5, 1fr)']} gap={3}>
            <GridItem w='100%' h={['160px', '180px', '220px', '260px', '300px']} bg='blue.500' />
            <GridItem w='100%' h={['160px', '180px', '220px', '260px', '300px']} bg='blue.500' />
            <GridItem w='100%' h={['160px', '180px', '220px', '260px', '300px']} bg='blue.500' />
            <GridItem w='100%' h={['160px', '180px', '220px', '260px', '300px']} bg='blue.500' />
            <GridItem w='100%' h={['160px', '180px', '220px', '260px', '300px']} bg='blue.500' />
            <GridItem w='100%' h={['160px', '180px', '220px', '260px', '300px']} bg='blue.500' />
            <GridItem w='100%' h={['160px', '180px', '220px', '260px', '300px']} bg='blue.500' />
            <GridItem w='100%' h={['160px', '180px', '220px', '260px', '300px']} bg='blue.500' />
        </Grid>
    </Box>
  )
}

export default CategoryContainer