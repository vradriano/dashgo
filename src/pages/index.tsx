import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Flex, Button, Stack } from '@chakra-ui/react'
import { Input } from '../components/Form/index'

const SignIn: NextPage = () => {
  return (
    <Flex
      w="100vw"
      h="100vh"
      align="center"
      justify="center"
    >
      <Flex
      as="form"
      width="100%"
      maxWidth={360}
      bg='gray.800'
      p="8"
      borderRadius={8}
      flexDir="column"
      >
        <Stack spacing="4">
          <Input type="email" name="email" label="E-mail" />
          <Input type="password" name="password" label="Senha" />
        </Stack>
        <Button type="submit" mt="6" colorScheme="pink" size="lg">Entrar</Button>
      </Flex>
    </Flex>
  )
}

export default SignIn
