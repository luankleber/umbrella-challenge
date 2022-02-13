import { Button, HStack, Input } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";

export function InputComponent(props) {
  const [city, setCity] = useState("");
  const API_KEY = "845ecb59815a2ec959a194d1e002cabc";

  function getData() {
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
      )
      .then((response) => {
        props.dataAPI(response.data);
      });
  }

  return (
    <HStack spacing="5px">
      <Input
        height="48px"
        width="300px"
        variant="flushed"
        focusBorderColor="purple.px"
        placeholder="City Name"
        value={city}
        onChange={(event) => setCity(event.target.value)}
      />
      <Button
        height="50px"
        backgroundColor="gray.800"
        variant="solid"
        borderRadius="8px"
        onClick={getData}
      >
        Search
      </Button>
    </HStack>
  );
}
