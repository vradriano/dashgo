import { Box, Button, Checkbox, Flex, Heading, Icon, Spinner, Table, Tbody, Td, Text, Th, Thead, Tr, useBreakpointValue } from '@chakra-ui/react'
import { RiAddLine, RiPencilLine } from "react-icons/ri"
import Link  from 'next/link'
import { useEffect } from 'react'
import { useQuery } from 'react-query'

import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'
import Pagination from '../../components/Pagination'

export default function UserList() {
  const { data, isLoading, isError } = useQuery('users', async () => {
    const response = await fetch('http://localhost:3000/api/users')
    const data = await response.json()

    return data
  })

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto"  px={["4", "4", "6"]} >
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center" >
            <Heading size="lg" fontWeight="normal"> Usuários </Heading>
            
            <Link href="/users/create" passHref>
              <Button
                as="a"
                size="sm"
                fontSize="small"
                colorScheme="pink"
                leftIcon={<Icon as={RiAddLine} fontSize="20" />}
              >
                Novo usuário
              </Button>
            </Link>
          </Flex>

          
          {
            isLoading ? (
              <Flex justify="center">
                <Spinner />
              </Flex>
            ) : isError ? (
              <Flex justify="center">Falha ao obter dados dos usuários</Flex>
            ) : (
              <>
              <Table colorScheme="whiteAlpha">
                <Thead>
                  <Tr>
                    <Th px={["4", "4", "6"]} color="gray.300" width="8">
                      <Checkbox colorScheme="pink" />
                    </Th>
                    <Th>Usuário</Th>
                    { isWideVersion && ( <Td> Data de cadastro</Td> )}
                    <Th width="8"></Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td  px={["4", "4", "6"]}>
                      <Checkbox colorScheme="pink" />
                    </Td>
                    <Td>
                      <Box>
                        <Text fontWeight="bold" >Vitor Ricardo</Text>
                        <Text fontSize="small" color="gray.300" >vradriano@hotmail.com</Text>
                      </Box>
                    </Td>
                  { isWideVersion && ( <Td>19 de maio de 2022</Td> )}
                    <Td>
                      <Button
                        as="a"
                        size="sm"
                        fontSize="small"
                        colorScheme="purple"
                        leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                      >
                        Editar
                      </Button>
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
            <Pagination />
            </>
            )
          }
        </Box>


      </Flex>
    </Box>
  )
}