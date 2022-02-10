import React from "react";
import "./App.css";
import { Flex, Grid, Heading, HStack, Text } from "@chakra-ui/react";
import { InputComponent } from "./components/InputComponent";
import { useState } from "react";
import { DateComponent } from "./components/DateComponent.jsx";

function App() {
  const [tempAPI, setTempAPI] = useState("");
  const [nameAPI, setNameAPI] = useState("");

  function dataAPI(weatherData) {
    setTempAPI(parseInt(weatherData.main.temp));
    setNameAPI(weatherData.name);
    console.log(weatherData);
  }

  return (
    <Grid
      as="main"
      height="100vh"
      templateColumns="1fr 480px 480px 1fr"
      templateRows="1fr 480px 1fr"
      templateAreas="
        '. . . .'
        '. temp form .'
        '. . . .'
        "
      justifyContent="center"
      alignItems="center"
    >
      <Flex
        gridArea="temp"
        height="110%"
        backgroundColor="purple.700"
        borderRadius="2xl"
        flexDir="column"
        alignItems="stretch"
        padding="45px"
        alignItems="left"
      >
        <Heading size="4xl">
          <DateComponent CurrentDate="day" />
        </Heading>
        <p>{nameAPI}</p>
        <HStack>
          <Heading fontSize="110px">{tempAPI}</Heading>
          <Text fontSize="110px">°C</Text>
        </HStack>
      </Flex>

      <Flex
        gridArea="form"
        height="100%"
        backgroundColor="gray.700"
        borderRadius="md"
        flexDir="column"
        alignItems="stretch"
        padding={16}
        alignItems="center"
      >
        <InputComponent dataAPI={dataAPI} />
      </Flex>
    </Grid>
  );
}

export default App;
