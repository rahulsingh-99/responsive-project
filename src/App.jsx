import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { Switch, Route, Redirect } from "react-router";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import ContactUs from "./ContactUs";
import Navbar from "./Navbar";
import Login from "./Login";
import Footer from "./Footer";
import { Toggle } from "./Toggle";
import { useDarkMode } from "./useDarkMode";
import styled, { ThemeProvider } from "styled-components";
import { GlobalStyle, darkTheme, lightTheme } from "./GlobalStyle";

const App = () => {
  const Container = styled.div``;
  const [theme, toggleTheme] = useDarkMode();

  const themeMode = theme === "light" ? lightTheme : darkTheme;
  return (
    <ThemeProvider theme={themeMode}>
      <Container>
        <GlobalStyle />
        <div className="theme-toggler">
          <Toggle theme={theme} toggleTheme={toggleTheme} />
        </div>
        <Navbar theme={themeMode} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/contact" component={ContactUs} />
          <Route exact path="/login" component={Login} />
          <Redirect to="/" />
        </Switch>
        <Footer />
      </Container>
    </ThemeProvider>
  );
};

export default App;