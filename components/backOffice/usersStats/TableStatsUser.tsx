import { userApi } from '@/api/usersApi'
import { Box, TableContainer, Table, TableCaption, HStack, Button, Spacer, Thead, Tr, Th, Tbody, Td } from '@chakra-ui/react'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import TbodyCard from './TbodyCard';
import { IUser } from '@/interface/IUser';


function TableStatsUser() {

    const [data, setData] = useState([])

    async function getAllUsers() {
        try {
            // recibe skip and limit
          const response = await axios.get('http://localhost:8080/api/user?limit=6');
          console.log(response.data.payload);
          setData(response.data.payload)
        } catch (error) {
            setData([])
          console.error(error);
        }
      }

    useEffect(() => {
        getAllUsers()
    }, [])
    
  return (
    <Box
    bg={'white'}
    rounded={'md'}
    boxShadow={'md'}
    overflowY={'auto'}
    >
        <TableContainer>
            <Table variant='simple' size={'md'}>
                <TableCaption>
                    <HStack spacing={2}>
                        <Button
                            colorScheme='blue'
                        >
                            Back
                        </Button>
                        <Spacer/>
                        <Button
                            colorScheme='blue'
                        >
                            Next
                        </Button>
                    </HStack>

                </TableCaption>
                
                <Thead>

                <Tr>
                    <Th>userId</Th>
                    <Th>FirstName</Th>
                    <Th>Email</Th>
                    <Th>Age</Th>
                    <Th>Status</Th>
                    <Th>Type</Th>
                    <Th isNumeric>Wallet</Th>
                </Tr>
                </Thead>
                
                <Tbody>
                    {
                        data.map((e:IUser)=> ( 
                            <TbodyCard 
                                userId={e.userId} 
                                firstName={e.firstName} 
                                email={e.email} 
                                age={e.age} 
                                status={e.status} 
                                type={e.type} 
                                wallet={e.wallet}
                                /> ))
                    }
                    
                </Tbody>
            </Table>
        </TableContainer>
    </Box>
  )
}

export default TableStatsUser