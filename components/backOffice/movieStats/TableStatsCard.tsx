import React from 'react'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Box,
    HStack,
    Button,
    Spacer,
  } from '@chakra-ui/react'

const dataTest = [
    {
        nombre: 'testnaffm',
        stock: 26, 
        sold: 43
    },
    {
        nombre: 'testnamsdf',
        stock: 15, 
        sold: 43
    },
    {
        nombre: 'testnam',
        stock: 67, 
        sold: 43
    },
    {
        nombre: 'testnaxxm',
        stock: 22, 
        sold: 67
    },
    {
        nombre: 'testnaxxm',
        stock: 22, 
        sold: 67
    },
    {
        nombre: 'testnaxxm',
        stock: 22, 
        sold: 67
    },
]

function TableStatsCard() {
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
                    <Th>Nombre</Th>
                    <Th>Stock</Th>
                    <Th isNumeric>Sold</Th>
                </Tr>
                </Thead>
                
                <Tbody>
                    {
                        dataTest.map((e:any)=> (
                        <Tr>
                            <Td>{e.nombre}</Td>
                            <Td isNumeric>{e.stock}</Td>
                            <Td isNumeric>{e.sold}</Td>
                        </Tr>
                        ))
                    }
                </Tbody>
            </Table>
        </TableContainer>
    </Box>
  )
}

export default TableStatsCard