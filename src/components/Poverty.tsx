import React from "react";
import { Text, Box, Heading, Spacer, AspectRatio } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { Center } from "@chakra-ui/layout";
import { Card, CardBody, CardFooter } from "@chakra-ui/card";
import { Popover,PopoverTrigger, PopoverArrow, PopoverBody, PopoverContent, PopoverCloseButton, PopoverHeader } from "@chakra-ui/popover";

//make a popover for the different communities affected
/*
                <AspectRatio maxW="300px" ratio={1}>
                    <iframe title="How Do Homeless Women Cope With Their Periods?" src="https://www.cbsnews.com/video/period-half-the-population-has-one-but-no-one-talks-about-it/" allowFullScreen>
                    </iframe>    

                </AspectRatio>
*/

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
                    <Button mr={5}>Low-Income</Button>
                </PopoverTrigger>
                <PopoverContent>
                    <PopoverArrow />
                    <PopoverCloseButton />
                    <PopoverBody>
                        Many low-income countries not only lack period product supplies but tend to have issues with sanitation and hygiene facilities. 
                        With these situations it has a poor impact on mental health as well as puts them in dangerous situations as many have to seek dangerous means to recieve products.
                    </PopoverBody>
                </PopoverContent>
            </Popover>
        
            <Popover>
                <PopoverTrigger>
                    <Button mr={5}>Homelessness</Button>
                </PopoverTrigger>
                <PopoverContent>
                    <PopoverArrow />
                    <PopoverCloseButton />
                    <PopoverBody>
                        In this country many people face homelessness, and with a montly period the choice between products or eating for the day is a challenging. 
                        The cost of products are very high and they add up, and a single supply does not last for very long based on a persons flow. 
                    </PopoverBody>
                </PopoverContent>
            </Popover>

            <Popover>
                <PopoverTrigger>
                    <Button mr={5}>Incarceration</Button>
                </PopoverTrigger>
                <PopoverContent>
                    <PopoverArrow />
                    <PopoverCloseButton />
                    <PopoverBody>
                        Approximately 230,000 women are incarcerated, there are thrity-eight states without mandatory laws to provide menstrual products. 
                        If a state does have a mandatory law many do not provided the right amount of products, with this many women are forced to other methods to make means end.
                    </PopoverBody>
                </PopoverContent>
            </Popover>
            <Popover>
                <PopoverTrigger>
                    <Button mr={5}>Health Issues</Button>
                </PopoverTrigger>
                <PopoverContent>
                    <PopoverArrow />
                    <PopoverCloseButton />
                    <PopoverBody>
                        In nearly all communities that this issues impacts it has a direct impact on physical health.
                        Due to lack of products many make their own products out of other materials like socks, newspaper, bags, mud, and other harmful materials. 
                        The anxiety and stress that people face on theri period in these tough situations deteriorates their physical health and leaves many open to infects or other diseases. 
                    </PopoverBody>
                </PopoverContent>
            </Popover>
            <Spacer></Spacer>
            <Card w="40vh" h="20vh" align="flex">
                <div className = "video-container">
                    <video controls>
                        <source src = "https://www.cbsnews.com/video/period-half-the-population-has-one-but-no-one-talks-about-it/">
                        </source>
                    </video>

                </div>
            </Card>
        </Box>
    );
}