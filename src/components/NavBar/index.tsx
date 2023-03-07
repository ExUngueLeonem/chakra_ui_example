import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, IconButton, useBoolean, useColorModeValue } from "@chakra-ui/react";
import { palette } from "styles/themeStyle";

const NavBar = () => {
    const [isOpen, setIsOpen] = useBoolean(false);
    const themeText = useColorModeValue("light", "dark")

    console.log("text", themeText)
    return (
        <Box h="100%" bgColor={palette[themeText].bgGrey} w={isOpen ? "360px" : "50px"}>
            <Box p="1">
                <IconButton aria-label="close-navbar" variant={"outline"} icon={isOpen ? <ArrowBackIcon /> : <ArrowForwardIcon />} onClick={setIsOpen.toggle} />
            </Box>
            <Box>
                {isOpen ?
                    "строки"
                    :
                    "Иконки"
                }
            </Box>
        </Box>
    );
};

export default NavBar;