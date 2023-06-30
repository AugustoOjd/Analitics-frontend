import { Box, Divider, Heading, LinkBox, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import OfferItemsCard from './OfferItemsCard'
import { TimeIcon } from '@chakra-ui/icons'

const data = [
  {
    title: 'Plan mensual',
    icon: <TimeIcon/>,
    save: 0,
    cost: 20
  },
  {
    title: 'Plan 6 meses',
    icon: <TimeIcon/>,
    save: 60,
    cost: 60
  },
  {
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
      data.map((i:any, index)=> (
      <LinkBox 
        as={'button'} 
        onClick={()=> console.log(i.title)}
        >
      <Box 
        w={['280px', '280px', '200px', '250px', '300px']} 
        h={['98px', '98px', '300px', '350px']} 
        bg='#f2f2f2' 
        rounded={'lg'} 
        boxShadow={'md'}
        border={'1px'}
        borderColor={'gray.300'}
        p={2}
        _hover={{
          color: "gray.900",
          boxShadow: 'lg',
          bg: 'orange.200',
        }}
        >
        <Heading
          color={'gray.900'} 
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
                <OfferItemsCard key={i.title} icon={i.icon} save={i.save} cost={i.cost}/>
          </Stack>
      </Box>
      </LinkBox>
      ))
      }
    </>
  )
}

export default OfferCard