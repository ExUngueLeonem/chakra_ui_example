import {  Center, Flex, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from "@chakra-ui/react";

import AuthSignIn from "components/Auth/AuthSignIn";
import AuthSignUp from "components/Auth/AuthSignUp";

const AuthPage = () => {

    return (
        <Flex>
            <Center w="100vw" h="100vh">
                <Tabs size="md" variant="enclosed">
                    <TabList>
                        <Tab>
                            <Text size="md" textTransform="uppercase">
                                Вход
                            </Text>
                        </Tab>
                        <Tab>
                            <Text size="md" textTransform="uppercase">
                                Регистрация
                            </Text>
                        </Tab>
                    </TabList>

                    <TabPanels>
                        <TabPanel>
                            <AuthSignIn />
                        </TabPanel>
                        <TabPanel>
                            <AuthSignUp />
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Center>
        </Flex>

    );
};

export default AuthPage;