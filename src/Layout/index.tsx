import { Grid, GridItem } from "@chakra-ui/react";
import Header from "components/Header";
import NavBar from "components/NavBar";
import { ReactNode, useState } from "react";

const Layout = ({ children }: { children: ReactNode }) => {

    return (
        <Grid
            h="100vh"
            templateRows={"100px 1fr"}
            templateColumns={"50px 1fr"}

            templateAreas={`"header header"
                            "nav    main"`}
        >
            <GridItem area={"header"}>
                <Header />
            </GridItem>
            <GridItem area={"nav"}>
                <NavBar/>
            </GridItem>
            <GridItem area="main">
                {children}
            </GridItem>
        </Grid>
    );
};

export default Layout;