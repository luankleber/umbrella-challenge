import { Flex } from "@chakra-ui/react";
import { InputComponent } from "./InputComponent";

export function PurpleBoxComponent() {
  return (
    <Flex
      gridArea="temp"
      height="110%"
      backgroundColor="purple.700"
      borderRadius="2xl"
      flexDir="column"
      alignItems="stretch"
      padding="45px"
      alignItems="left"
    ></Flex>
  );
}
