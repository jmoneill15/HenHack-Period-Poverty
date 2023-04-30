import React from "react";
import { Accordion, AccordionButton,AccordionIcon,AccordionPanel, AccordionItem } from "@chakra-ui/accordion";
import { Box, Heading, Spacer } from "@chakra-ui/layout";
import { Location } from "./Location";
import { locationList } from "./locationList";
import { Input, InputGroup,InputLeftAddon } from "@chakra-ui/input";
import { Stack } from "@chakra-ui/layout";
import { useState } from "react";
import { HTMLInputTypeAttribute} from "react";

//add imports to add another location
/*
<Stack spacing={1}>
                <InputGroup p="7vh">
                    <InputLeftAddon>Building</InputLeftAddon>
                    <Input onChange={buildingChange} variant="filled" placeholder="Insert Building"></Input>
                </InputGroup>
                <InputGroup p="7vh">
                    <InputLeftAddon>Location</InputLeftAddon>
                    <Input onChange={locationChange} variant="filled" placeholder="Insert Location"></Input>
                </InputGroup>
                <InputGroup p="7vh">
                    <InputLeftAddon>Address</InputLeftAddon>
                    <Input onChange={addressChange} variant="filled" placeholder="Insert Address"></Input>
                </InputGroup>
                <InputGroup p="7vh">
                    <InputLeftAddon>Operating Hours</InputLeftAddon>
                    <Input onChange={hoursChange} variant="filled" placeholder="Insert Operating Hours "></Input>
                </InputGroup>
            </Stack>
*/

interface LocationProps {
    location: Location[];
}

export function getLocations(locations: Location[]): Location[] {
    const locationCopy = locations.map((locationData: Location): Location => ({...locationData}));
    return locationCopy;
}

const productArray = getLocations(locationList);

export function locationProperty(props: LocationProps){
    const locationList = props;
}

export function Locations(): JSX.Element {
    const [building, setBuilding] = React.useState("");
    const [location, setLocation] = React.useState("");
    const [address, setAddress] = React.useState("");
    const [hours, setHours] = React.useState("");


    function buildingChange (event: React.ChangeEvent<HTMLInputElement>){
        setBuilding(event.target.value);
    }

    function locationChange (event: React.ChangeEvent<HTMLInputElement>){
        setLocation(event.target.value);
    }
    function addressChange (event: React.ChangeEvent<HTMLInputElement>){
        setAddress(event.target.value);
    }
    function hoursChange (event: React.ChangeEvent<HTMLInputElement>){
        setHours(event.target.value);
    }
    function addLocation(building:string, location: string, address: string, hours:string):Location {
        const addLocation = {
            building: building,
            location:location,
            address: address,
            hours:hours
        };
        return addLocation;
    }

    function updateLocations (locations: Location[]): Location[] {
        const locationCopy = [...locations];
        const locat = addLocation(building,location, address, hours);
        const updatedLocation = [...locationCopy, locat];
        return updatedLocation;

    }

    const newList = updateLocations(locationList);
    //embed a map dumbfuck
    return(
        <Box>
            <Heading h="2vh" size="lg" style={{"fontFamily": "'Georgia', sans-serif"}}>Locations Providing Free Products</Heading>
            <Accordion p="8vh">
                {newList.map((location)=>(
                    <AccordionItem key={location.building}>
                        <AccordionButton>
                            <AccordionIcon/>
                            <Box>
                                <text>{location.building}</text>
                            </Box>
                        </AccordionButton>
                        <AccordionPanel>
                            Location: {location.location}
                            <Spacer></Spacer>
                            Operating Hours: {location.hours}
                            <Spacer></Spacer>
                            Address: {location.address}
                        </AccordionPanel>
                    </AccordionItem>
                ))}
            </Accordion> 
            <Spacer></Spacer>
            <Heading size ="md" style={{"fontFamily": "'Georgia', sans-serif"}}>Add a New Location:</Heading>
            <Stack spacing={1}>
                <InputGroup p="7vh">
                    <InputLeftAddon>Building</InputLeftAddon>
                    <Input onChange={buildingChange} variant="filled" placeholder="Insert Building"></Input>
                    <Spacer></Spacer>
                    <InputLeftAddon>Location</InputLeftAddon>
                    <Input onChange={locationChange} variant="filled" placeholder="Insert Location"></Input>

                    <InputLeftAddon>Address</InputLeftAddon>
                    <Input onChange={addressChange} variant="filled" placeholder="Insert Address"></Input>

                    <InputLeftAddon>Operating Hours</InputLeftAddon>
                    <Input onChange={hoursChange} variant="filled" placeholder="Insert Operating Hours "></Input>
                </InputGroup>
            </Stack>
        </Box>
    );
}