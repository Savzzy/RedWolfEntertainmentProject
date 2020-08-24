import React, { useState, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import globalTheme from "./globalTheme";
import ScreenOne from "./components/ScreenOne";
import ScreenTwo from "./components/ScreenTwo";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer/Footer";

const Container = styled.div``;

const App: React.FC = (): JSX.Element => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 176) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <ThemeProvider theme={globalTheme}>
      <Container>
        <NavBar scrolled={scrolled} />
        <ScreenOne />
        <ScreenTwo />
        <Footer />
      </Container>
    </ThemeProvider>
  );
};

export default App;
