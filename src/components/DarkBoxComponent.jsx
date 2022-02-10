import { Flex } from "@chakra-ui/react";
import { InputComponent } from "./InputComponent";

export function DarkBoxComponent() {
  return (
    <Flex
      gridArea="input"
      height="100%"
      backgroundColor="gray.700"
      borderRadius="md"
      flexDir="column"
      alignItems="stretch"
      padding={16}
      alignItems="center"
    >
      <InputComponent />
    </Flex>
  );
}
