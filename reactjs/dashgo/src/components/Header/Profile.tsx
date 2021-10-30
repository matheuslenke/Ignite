import { Box, Flex, Text, Avatar } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
    <Box mr="4" textAlign="right">
      <Text>Matheus Lenke</Text>
      <Text color="gray.300" fontSize="small">
        matheuslenke@gmail.com
      </Text>
    </Box>

    <Avatar size="md" name="Matheus Lenke" src="https://github.com/matheuslenke.png" />
  </Flex>
  )
}