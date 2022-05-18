import { FormControl, FormLabel, Input as ChakraInput, InputProps as ChakraInputProps } from '@chakra-ui/react'

interface InputPropsTypes extends ChakraInputProps {
  name: string;
  label?: string;
}

export function Input({ name, label, ...rest }: InputPropsTypes) {
  return (
    <FormControl>
      { !!label && <FormLabel htmlFor={name}>{label}</FormLabel> }

      <ChakraInput
      id={name}
      type="email"
      name={name}
      focusBorderColor="pink.500"
      bgColor="gray.900"
      variant="filled"
      _hover={{
        bgColor: 'gray.900'
      }}
      size="lg"
      {...rest}
      />
    </FormControl>
  )
}