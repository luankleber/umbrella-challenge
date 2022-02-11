import React from "react";
import "./App.css";
import {
  Flex,
  Grid,
  Heading,
  HStack,
  Stack,
  Text,
  Box,
  Spacer,
  Image,
  Center,
  Link,
  LinkBox,
  LinkOverlay,
  Icon,
} from "@chakra-ui/react";
import { InputComponent } from "./components/InputComponent";
import { useState } from "react";
import { DateComponent } from "./components/DateComponent.jsx";
import { FiMapPin } from "react-icons/fi";
import { AiFillAmazonCircle } from "react-icons/ai";
import { SiAirbnb } from "react-icons/si";

function App() {
  const [tempAPI, setTempAPI] = useState("0");
  const [nameAPI, setNameAPI] = useState("");
  const [countryAPI, setCountryAPI] = useState("");
  const [condAPI, setCondAPI] = useState("no city");
  const [iconAPI, setIconAPI] = useState("10n");
  const [humidityAPI, setHumidityAPI] = useState("0");
  const [windAPI, setWindAPI] = useState("0");
  const [pressureAPI, setPressureAPI] = useState("0");
  const [numberAPI, setNumberAPI] = useState("");

  function dataAPI(weatherData) {
    setTempAPI(parseInt(weatherData.main.temp));
    setNameAPI(weatherData.name);
    setCountryAPI(weatherData.sys.country);
    setCondAPI(weatherData.weather[0].description);
    setIconAPI(weatherData.weather[0].icon);
    setHumidityAPI(weatherData.main.humidity);
    setWindAPI(weatherData.wind.speed);
    setPressureAPI(weatherData.main.pressure);
    setNumberAPI(weatherData.weather[0].id);
  }

  function suggestions() {
    var numberID = numberAPI;
    numberID /= 100;
    if (parseInt(numberID) === 2) {
      return (
        <Text as="abbr" fontSize="20px">
          It's not a good weather outside. Try to keep yourself in a safe and
          warm place.
        </Text>
      );
    } else if (parseInt(numberID) === 3) {
      return (
        <Stack>
          <Text as="abbr" fontSize="20px">
            It's drizzling outside, maybe you need an umbrella.
          </Text>
          <Center bg="blue.600" h="30px" w="160px" borderRadius="8px">
            <Text>
              <Link
                href="https://www.amazon.com/umbrella/s?k=umbrella"
                isExternal
              >
                Buy one here.
              </Link>
            </Text>
            <Icon as={AiFillAmazonCircle} marginLeft="5px" />
          </Center>
        </Stack>
      );
    } else if (parseInt(numberID) === 5) {
      return (
        <Stack>
          <Text as="abbr" fontSize="20px">
            It's raining outside, take an umbrella if you're going out.
          </Text>
          <Center bg="blue.600" h="30px" w="160px" borderRadius="8px">
            <Text>
              <Link
                href="https://www.amazon.com/umbrella/s?k=umbrella"
                isExternal
              >
                Buy one here.
              </Link>
            </Text>
            <Icon as={AiFillAmazonCircle} marginLeft="5px" />
          </Center>
        </Stack>
      );
    } else if (parseInt(numberID) === 6) {
      return (
        <Text as="abbr" fontSize="20px">
          It's snowing outside, don't forget your scarf and gloves.
        </Text>
      );
    } else if (parseInt(numberID) === 8) {
      return (
        <Stack>
          <Text as="abbr" fontSize="20px">
            The weather is perfect for walking, traveling or discovering new
            things.
          </Text>
          <Center bg="blue.600" h="30px" w="250px" borderRadius="8px">
            <HStack>
              <Text>
                <Link
                  href={`https://www.airbnb.com.br/s/all?query=${nameAPI}`}
                  isExternal
                >
                  Explore {nameAPI}
                </Link>
              </Text>
              <Icon as={SiAirbnb} marginLeft="5px" />
            </HStack>
          </Center>
        </Stack>
      );
    }
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
        <Box paddingTop="40px" textAlign="left" height="167px">
          {suggestions()}
        </Box>
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
          <HStack textTransform="uppercase">
            <Heading size="md">Humidity</Heading>
            <Spacer />
            <Text as="abbr" fontSize="20px">
              {humidityAPI} %
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
          <HStack paddingTop="5px">
            <Heading textTransform="uppercase" size="md">
              Wind Speed
            </Heading>
            <Spacer />
            <Text as="abbr" fontSize="20px">
              {windAPI} m/s
            </Text>
          </HStack>
        </Box>
      </Flex>
    </Grid>
  );
}

export default App;
