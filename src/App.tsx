import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ChakraProvider, theme, } from "@chakra-ui/react"

import HomePage from "./pages/HomePage"
import AuthPage from "pages/AuthPage"

export const App = () => (
  <ChakraProvider theme={theme}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  </ChakraProvider>
)
