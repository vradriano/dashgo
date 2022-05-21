import { Flex, Box, Text, Avatar } from '@chakra-ui/react'

export function Profile(){
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Vitor Ricardo</Text>
        <Text 
          color="gray.300" 
          fontSize="small"
        >
          vradriano@hotmail.com</Text>
      </Box>

      <Avatar size="md" name="Vitor Ricardo" />
    </Flex>   
  )
}