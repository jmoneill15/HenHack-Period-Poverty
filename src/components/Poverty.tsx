import React from "react";
import { Text, Box, Heading, Spacer, AspectRatio } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { Container} from "@chakra-ui/react";
import { Link} from "@chakra-ui/react";
import { Popover,PopoverTrigger, PopoverArrow, PopoverBody, PopoverContent, PopoverCloseButton, PopoverHeader } from "@chakra-ui/popover";

export function Poverty(): JSX.Element {

    return(
        <Box>
            <Heading h="3vh"></Heading>
            <Heading h="1vh" size="lg" style={{"fontFamily": "'Georgia', sans-serif"}}>
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
            <Heading h="10vh"></Heading>
            <Spacer></Spacer>
            <Container maxW="4100vh" >
                <Heading h="5vh" size="md" style={{"fontFamily": "'Georgia', sans-serif"}}>Learn More:</Heading>
                <Link color="red.700" style={{"fontFamily": "'Georgia', sans-serif"}} href="https://opendocs.ids.ac.uk/opendocs/bitstream/handle/20.500.12413/14348/536_Period_Poverty_Impact_on_the_Economic_Empowerment_of_Women.pdf?sequence=3&isAllowed=y " isExternal>
                Period poverty impact on the economic empowerment of women
                </Link>
                <Spacer></Spacer>
                <Link color="red.700" style={{"fontFamily": "'Georgia', sans-serif"}} href="https://www.washingtonpost.com/opinions/2022/03/25/prison-period-danger-health-risks-sexual-abuse/" isExternal>
                    In prison, having your period can put your life in danger 
                </Link>
                <Spacer></Spacer>
                <Link color="red.700" style={{"fontFamily": "'Georgia', sans-serif"}} href="https://www.bustle.com/articles/190092-this-is-how-homeless-women-cope-with-their-periods" isExternal>
                    How Do Homeless Women Cope With Their Periods?
                </Link>
                <Spacer></Spacer>
                <Link color="red.700" style={{"fontFamily": "'Georgia', sans-serif"}} href="https://www.unicef.org/media/91346/file/UNICEF-Guide-menstrual-hygiene-materials-2019.pdf" isExternal>
                    Guide to Menstrual Hygiene Materials
                </Link>
                <Spacer></Spacer>
                <Link color="red.700" style={{"fontFamily": "'Georgia', sans-serif"}} href="https://sites.uab.edu/humanrights/2019/11/11/examining-period-poverty/" isExternal>
                    Examining Period Poverty
                </Link>
            </Container>
        </Box>
    );
}