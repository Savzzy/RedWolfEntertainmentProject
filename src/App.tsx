import React from "react";
import styled, { ThemeProvider } from "styled-components";
import globalTheme from "./globalTheme";
import ScreenOne from "./components/ScreenOne";
import ScreenTwo from "./components/ScreenTwo";
import NavBar from "./components/NavBar";

const App: React.FC = (): JSX.Element => {
  return (
    <ThemeProvider theme={globalTheme}>
      <NavBar />
      <ScreenOne />
      <ScreenTwo />
    </ThemeProvider>
  );
};

export default App;
