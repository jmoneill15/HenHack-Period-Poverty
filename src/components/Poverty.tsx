import React from "react";
import { Text, Box, Heading, Spacer, AspectRatio } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { Center } from "@chakra-ui/layout";
import { Card } from "@chakra-ui/card";
import { Popover,PopoverTrigger, PopoverArrow, PopoverBody, PopoverContent, PopoverCloseButton, PopoverHeader } from "@chakra-ui/popover";

//make a popover for the different communities affected

export function Poverty(): JSX.Element {
    return(
        <Box>
            <Heading size="lg" style={{"fontFamily": "'Georgia', sans-serif"}}>
                <Text size="sm" fontSize="Georgia">What is Period Poverty?</Text>
            </Heading>
            <Text p="8vh" size="md" style={{"fontFamily": "'Georgia', sans-serif"}} noOfLines={7}>
                Period poverty is a lack of access to period products, hygiene facilities, menstrual education, or waste management.
                It also refers to the economic vulnerability that menstruating people experience due to the financial burdens of purchasing products.
                Hygiene products can also be severly limited based on location, forcing people to resort to makeshift products which can lead to negative health issues. 
                Some of the most impacted groups are people in low-income countries, those facing homelessness, and those incarcerated.
            </Text> 
            <Spacer></Spacer>
            <Popover>
                <PopoverTrigger>
                    <Button mr={5}>Trigger</Button>
                </PopoverTrigger>
                <PopoverContent>
                    <PopoverArrow />
                    <PopoverCloseButton />
                    <PopoverHeader>Confirmation!</PopoverHeader>
                    <PopoverBody>Are you sure you want to have that milkshake?</PopoverBody>
                </PopoverContent>
            </Popover>
        
            <Popover>
                <PopoverTrigger>
                    <Button mr={5}>Homelessness</Button>
                </PopoverTrigger>
                <PopoverContent>
                    <PopoverArrow />
                    <PopoverCloseButton />
                    <PopoverHeader>Confirmation!</PopoverHeader>
                    <PopoverBody>Are you sure you want to have that milkshake?</PopoverBody>
                </PopoverContent>
            </Popover>

            <Popover>
                <PopoverTrigger>
                    <Button mr={5}>Incarcerated</Button>
                </PopoverTrigger>
                <PopoverContent>
                    <PopoverArrow />
                    <PopoverCloseButton />
                    <PopoverHeader>Confirmation!</PopoverHeader>
                    <PopoverBody>Are you sure you want to have that milkshake?</PopoverBody>
                </PopoverContent>
            </Popover>




            <Spacer></Spacer>
            <AspectRatio maxW="300px" ratio={1}>
                <iframe title="How Do Homeless Women Cope With Their Periods?" src="https://youtu.be/ABch4VYOJZ0" allowFullScreen>
                </iframe>
            </AspectRatio>
        </Box>
    
    );

}