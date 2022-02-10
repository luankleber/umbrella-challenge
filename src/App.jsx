import React from "react";
import "./App.css";
import { Grid } from "@chakra-ui/react";
import { PurpleBoxComponent } from "./components/PurpleBoxComponent";
import { DarkBoxComponent } from "./components/DarkBoxComponent";

function App() {
  return (
    <Grid
      as="main"
      height="100vh"
      templateColumns="1fr 480px 480px 1fr"
      templateRows="1fr 480px 1fr"
      templateAreas="
      '. . . .'
      '. temp input .'
      '. . . .'
      "
      justifyContent="center"
      alignItems="center"
    >
      <PurpleBoxComponent />
      <DarkBoxComponent />
    </Grid>
  );
}

export default App;
