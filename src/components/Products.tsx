import React from "react";
import { SimpleGrid, Card, CardBody,CardBodyProps,Text,CardHeader, Image, CardFooter, Box, Heading, Flex, Spacer, AspectRatio } from "@chakra-ui/react";
import { Product } from "./Product";
import { productList } from "../products";

interface ProductProps {
    product: Product[];
}

export function getProducts(products: Product[]): Product[] {
    const productCopy = products.map((productData: Product): Product => ({...productData}));
    return productCopy;
}

const productArray = getProducts(productList);

export function productProperty(props: ProductProps){
    const productList = props;
}

export function Products(): JSX.Element {
    
    const productArray = getProducts(productList);

    function expandArray(array: string[]):string{
        const copy = [...array];
        const listOfItems = copy.join(", ");
        return listOfItems;
    }

    return(
        <Box>
            <Heading size="lg" style={{"fontFamily": "'Georgia', sans-serif"}}>
                <Text size="md">Hygiene Products</Text>
            </Heading>
            <SimpleGrid w="100%" h="80%" p="3vh"  spacing = {2} templateColumns={{base: "repeat(3, 1fr)"}}>
                {productList.map((product)=>(
                    <Card backgroundColor="red.600" maxW="md" direction={{base: "row", sm:"column"}} style={{"fontFamily": "'Georgia', sans-serif"}} overflow="hidden" variant="elevated" key={product.name}>
                        <CardHeader key={product.name} >
                            <Box>
                                <Heading size="sm" style={{"fontFamily": "'Georgia', sans-serif"}}>
                                    {product.name}
                                </Heading>
                            </Box>
                        </CardHeader>
                        <Box>
                            <CardBody>
                                <Flex>
                                    <Image maxW={{base: "100%", sm:"100px"}} src={product.image} alt="poster"></Image>
                                    <Text noOfLines={4} fontSize="sm"key={product.description}>{product.description}</Text>
                                    <Text fontSize="xs">                                
                                        <span>Cost: {product.avgCost}</span>
                                        <div></div>
                                        <span>Usage: {product.usage}</span>
                                        <div></div>
                                        <span>Material: {product.material}</span>
                                    </Text>
                                </Flex>
                            </CardBody>
                        </Box>
                    </Card>
                ))}
            </SimpleGrid>
        </Box>
    );
}
