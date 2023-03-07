import { ArrowBackIcon, ArrowForwardIcon, CloseIcon } from "@chakra-ui/icons";
import { Box, IconButton } from "@chakra-ui/react";
import { useState } from "react";

const NavBar = () => {
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);
    const toggleNavbar = () => setIsNavbarOpen(!isNavbarOpen)

    return (
        <Box h="100%" bgColor={"gray.200"} w={isNavbarOpen ? "360px" : "50px"}>
            <Box p="1">
                <IconButton aria-label="close-navbar" variant={"outline"} icon={isNavbarOpen ? <ArrowBackIcon /> : <ArrowForwardIcon />} onClick={toggleNavbar} />
            </Box>
            <Box>
                {isNavbarOpen ?
                    "строки"
                    :
                    "Иконки"
                }
            </Box>
        </Box>
    );
};

export default NavBar;