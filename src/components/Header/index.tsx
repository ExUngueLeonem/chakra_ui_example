import { Avatar, Box, Button, Flex, Grid, GridItem, HStack, useColorModeValue } from "@chakra-ui/react";
import { ColorModeSwitcher } from "ColorModeSwitcher";
import { useNavigate } from "react-router-dom";
import { palette } from "styles/themeStyle";

const Header = () => {
    const themeText = useColorModeValue("light", "dark")
    const navigate = useNavigate()

    const onLogoutHadler = () => navigate("/")

    return (
        <Box bgColor={palette[themeText].bgBlue} h="100%" p="5">
            <Grid
                h="100%"
                gridTemplateColumns="360px 1fr 360px"
                gridTemplateRows="1fr"
            >
                <GridItem>

                </GridItem>
                <GridItem>

                </GridItem>
                <Flex
                    justifyContent="flex-end"
                    alignItems="center"
                >
                    <HStack spacing={5}>
                        <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
                        <ColorModeSwitcher justifySelf="flex-end" />
                        <Button onClick={onLogoutHadler}>Выход</Button>
                    </HStack>
                </Flex>
            </Grid>
        </Box>
    );
};

export default Header;