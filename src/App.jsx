import React from "react";
import "./App.css";
import {
  Flex,
  Grid,
  Heading,
  HStack,
  Text,
  Box,
  Image,
} from "@chakra-ui/react";
import { InputComponent } from "./components/InputComponent";
import { useState } from "react";
import { DateComponent } from "./components/DateComponent.jsx";
import { FiMapPin } from "react-icons/fi";

function App() {
  const [tempAPI, setTempAPI] = useState("0");
  const [nameAPI, setNameAPI] = useState("");
  const [countryAPI, setCountryAPI] = useState("");
  const [condAPI, setCondAPI] = useState("");
  const [iconAPI, setIconAPI] = useState("10n");

  function dataAPI(weatherData) {
    setTempAPI(parseInt(weatherData.main.temp));
    setNameAPI(weatherData.name);
    setCountryAPI(weatherData.sys.country);
    setCondAPI(weatherData.weather[0].description);
    setIconAPI(weatherData.weather[0].icon);
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
        backgroundColor="green.700"
        borderRadius="2xl"
        flexDir="column"
        alignItems="stretch"
        padding="45px"
        alignItems="left"
      >
        <DateComponent />
        <HStack spacing="5px" paddingTop="10px">
          <FiMapPin />
          <Text fontSize="15px">
            {nameAPI}, {countryAPI}
          </Text>
        </HStack>
        <Box paddingTop="60px" boxSize="100px">
          <Image src={`http://openweathermap.org/img/wn/${iconAPI}@2x.png`} />
        </Box>
        <HStack paddingTop="20px">
          <Heading fontSize="110px">{tempAPI}</Heading>
          <Text fontSize="110px">°C</Text>
        </HStack>
        <Heading textTransform="capitalize" as="sup" fontSize="25px">
          {condAPI}
        </Heading>
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
