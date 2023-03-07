import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Code, Grid, Link as ChakraLink, Text, VStack } from "@chakra-ui/react";
import Layout from "Layout";
import { useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import { ColorModeSwitcher } from "../ColorModeSwitcher";
import { Logo } from "../components/Logo";

const HomePage = () => {
    const [popup, setPopup] = useState({ formType: '', payload: null })

    return (
        <Layout>
            <Box textAlign="center" fontSize="x1">
                <Grid minH="100vh" p={3}>
                    <ColorModeSwitcher justifySelf="flex-end" />
                    <VStack spacing={8}>
                        <Breadcrumb separator={<FaChevronRight />} spacing="50px">
                            <BreadcrumbItem>
                                <BreadcrumbLink href="#"> root </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbItem>
                                <BreadcrumbLink href="#"> home </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbItem>
                                <BreadcrumbLink href="#"> user </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbItem>
                                <BreadcrumbLink href="#"> huyuzer </BreadcrumbLink>
                            </BreadcrumbItem>
                        </Breadcrumb>

                        <Logo h="40vmin" pointerEvents="none" />
                        <Text>
                            Edit <Code fontSize="xl">src/App.tsx</Code> and save to reload.
                        </Text>
                        <Text>
                            <Code fontSize="xl"> Learn Chakra </Code>
                        </Text>
                        <ChakraLink
                            color="teal.500"
                            href="https://chakra-ui.com"
                            fontSize="2xl"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div style={{ width: "300px", height: "100px", backgroundColor: "blue" }}>

                            </div>

                            Learn Chakra
                        </ChakraLink>
                    </VStack>
                </Grid>
            </Box>
        </Layout>
    );
};

export default HomePage;