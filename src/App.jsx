import React from "react";
import "./App.css";
import {
  Flex,
  Grid,
  Heading,
  HStack,
  Text,
  Box,
  Spacer,
  Image,
  Stack,
} from "@chakra-ui/react";
import { InputComponent } from "./components/InputComponent";
import { useState } from "react";
import { DateComponent } from "./components/DateComponent.jsx";
import { FiMapPin } from "react-icons/fi";

function App() {
  const [tempAPI, setTempAPI] = useState("0");
  const [nameAPI, setNameAPI] = useState("");
  const [countryAPI, setCountryAPI] = useState("");
  const [condAPI, setCondAPI] = useState("no city");
  const [iconAPI, setIconAPI] = useState("10n");
  const [humidityAPI, setHumidityAPI] = useState("0");
  const [windAPI, setWindAPI] = useState("0");
  const [pressureAPI, setPressureAPI] = useState("0");

  function dataAPI(weatherData) {
    setTempAPI(parseInt(weatherData.main.temp));
    setNameAPI(weatherData.name);
    setCountryAPI(weatherData.sys.country);
    setCondAPI(weatherData.weather[0].description);
    setIconAPI(weatherData.weather[0].icon);
    setHumidityAPI(weatherData.main.humidity);
    setWindAPI(weatherData.wind.speed);
    setPressureAPI(weatherData.main.pressure);
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
        backgroundColor="blue.500"
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
        <Box height="200px"></Box>
        <HStack height="110px" paddingTop="20px" textAlign="revert">
          <Heading fontSize="110px">{tempAPI}</Heading>
          <Text fontSize="110px">°C</Text>
        </HStack>
        <Box>
          <HStack spacing="5px">
            <Image
              width="50px"
              src={`http://openweathermap.org/img/wn/${iconAPI}@2x.png`}
            />
            <Heading textTransform="capitalize" as="abbr" fontSize="25px">
              {condAPI}
            </Heading>
          </HStack>
        </Box>
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
        <Box
          margin="20px"
          borderRadius="8px"
          width="398px"
          padding="10px"
          backgroundColor="gray.800"
        >
          <HStack paddingTop="5px">
            <Heading textTransform="uppercase" size="md">
              Wind Speed
            </Heading>
            <Spacer />
            <Text as="abbr" fontSize="20px">
              {windAPI} m/s
            </Text>
          </HStack>
          <HStack textTransform="uppercase">
            <Heading size="md">Humidity</Heading>
            <Spacer />
            <Text as="abbr" fontSize="20px">
              {humidityAPI}%
            </Text>
          </HStack>
          <HStack>
            <Heading textTransform="uppercase" size="md">
              Pressure
            </Heading>
            <Spacer />
            <Text as="abbr" fontSize="20px">
              {pressureAPI} hPa
            </Text>
          </HStack>
        </Box>
      </Flex>
    </Grid>
  );
}

export default App;
