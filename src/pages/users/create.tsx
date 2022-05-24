import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'
import { Box, Button, Divider, Flex, Heading, SimpleGrid, VStack, HStack } from '@chakra-ui/react'
import { Input } from '../../components/Form'
import Link from 'next/link'
import { SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

type CreateUserFormData = {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

const createUserFormSchema = yup.object().shape({
  name: yup.string().required('Nome obrigatório!'),
  email: yup.string().required('E-mail obrigatório!').email('E-mail inválido!'),
  password: yup.string().required('E-mail obrigatório!').min(6, 'Senha precisa ter no mínimo 6 caracteres!'),
  password_confirmation: yup.string().oneOf([
    null, yup.ref('password')
  ], 'As senhas precisam ser iguais!')
})

export default function CreateUser() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(createUserFormSchema)
  })

  const { errors } = formState

  const handleCreateUser: SubmitHandler<CreateUserFormData> = async (values) => {
    await new Promise(resolve => setTimeout(resolve, 2000));

    console.log(values)
  }

  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6" >
        <Sidebar />

        <Box as="form" flex="1" borderRadius={8} bg="gray.800" p={["6", "8"]} onSubmit={handleSubmit(handleCreateUser)}>
          <Heading size="lg" fontWeight="normal">Criar usuário</Heading>

          <Divider my="6" borderColor="gray.700" />

          <VStack spacing="8">

            <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
              <Input label="Nome completo" error={errors.name} {...register('name')} />
              <Input label="E-mail" type="email" error={errors.email} {...register('email')} />
            </SimpleGrid>

            <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
              <Input type="password" label="Senha" error={errors.password} {...register('password')}  />
              <Input label="Confirmação de senha" type="password" error={errors.password_confirmation} {...register('password_confirmation')}  />
            </SimpleGrid>

          </VStack>

          <Flex mt="8" justify="flex-end">
            <HStack spacing="4">
              <Link href="/users/create" passHref>
                <Button
                  as="a"
                  colorScheme="whiteAlpha"
                >
                  Cancelar
                </Button>
              </Link>
              <Button 
              colorScheme="pink"
              type="submit"
              isLoading={formState.isSubmitting}
              >
                Salvar
              </Button>
            </HStack>

          </Flex>

        </Box>


      </Flex>
    </Box>
  )
}