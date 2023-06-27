import { Box, Spacer, Text } from '@chakra-ui/react'
import React from 'react'

interface Props {
    title: string,
    icon: any,
    xs: string,
    sm: string,
    md: string,
    xl: string,
    gt: string
}

function CardHeader({title, icon, xs, sm, md, xl, gt}:Props) {
  return (
    <Box w={[xs, sm, md, xl, '180px']} 
            display={'flex'} 
            justifyContent={'flex-start'}
            alignItems={'center'}
            h={['45px', '50px']}
            px={2}
            bg={'white'}
            rounded={'xl'}
            boxShadow={'base'} 
            >
              <Text 
                bgGradient={gt}
                bgClip='text'
                mr={2} 
                fontSize={'2xl'}
                fontWeight={'bold'}
                >
                  {title}
              </Text>
              <Spacer />
              <Box>
                {icon}
              </Box>
          </Box>
  )
}

export default CardHeader