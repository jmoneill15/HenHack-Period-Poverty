import React from "react";
import "./App.css";
import { Products } from "./components/Products";
import { Box, Spacer } from "@chakra-ui/layout";
import { Poverty } from "./components/Poverty";
import { Locations } from "./components/Locations";
import { Heading } from "@chakra-ui/react";

function App(): JSX.Element {

    return (
        <div className = "App">
            <header className = "App-header">Period Poverty
            </header>
            <Spacer></Spacer>
            <Poverty></Poverty>
            <Heading h="5vh"></Heading>
            <Products></Products>
            <Heading h="5vh"></Heading>
            <Locations></Locations>
        </div>
    );
}
export default App;