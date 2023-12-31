import { Box, Divider, Heading, LinkBox, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import OfferItemsCard from './OfferItemsCard'
import { TimeIcon } from '@chakra-ui/icons'

const data = [
  {
    id: 1,
    title: 'Plan mensual',
    icon: <TimeIcon/>,
    save: 0,
    cost: 20
  },
  {
    id: 2,
    title: 'Plan 6 meses',
    icon: <TimeIcon/>,
    save: 60,
    cost: 60
  },
  {
    id: 3,
    title: 'Plan 12 meses',
    icon: <TimeIcon/>,
    save: 90,
    cost: 150
  }
]


function OfferCard() {
  return (
    <>
    {
      data.map((i:any)=> (
      <LinkBox 
        as={'button'} 
        onClick={()=> console.log(i.title)}
        >
      <Box 
        w={['280px', '280px', '200px', '250px', '300px']} 
        h={['98px', '98px', '300px', '350px']} 
        bg='gray.800' 
        rounded={'lg'} 
        boxShadow={'md'}
        border={'2px'}
        borderColor={'#f96d00'}
        p={2}
        _hover={{
          // color: "gray.400",
          boxShadow: 'lg',
          bg: 'gray.700',
        }}
        >
        <Heading
          color={'white'} 
          h={5} 
          fontSize={'md'}
          mb={1}
          >
            {i.title}
          </Heading>
        
        <Divider borderColor='#f96d00' />
        
          <Stack 
            direction={['row', 'row', 'column']} 
            spacing={['15px']} 
            w={'100%'} 
            h={['60px', '60px', '250px', '300px']}
            alignItems={'center'}
            >
                <OfferItemsCard key={i.id} icon={i.icon} save={i.save} cost={i.cost}/>
          </Stack>
      </Box>
      </LinkBox>
      ))
      }
    </>
  )
}

export default OfferCard