import React from "react";
import "./App.css";
import { Products } from "./components/Products";
import { Box, Spacer } from "@chakra-ui/layout";
import { Poverty } from "./components/Poverty";
import { Locations } from "./components/Locations";

function App(): JSX.Element {

    return (
        <div className = "App">
            <header className = "App-header">Period Poverty
            </header>
            <Spacer></Spacer>
            <Poverty></Poverty>
            <Spacer></Spacer>
            <Products></Products>
            <Spacer></Spacer>
            <Locations></Locations>
        </div>
    );
}
export default App;