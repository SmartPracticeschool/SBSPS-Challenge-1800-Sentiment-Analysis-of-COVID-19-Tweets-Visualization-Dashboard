import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container, Paper } from "@material-ui/core";
import Navbar from "./components/Navbar";
import Grid from "./components/Grid";

function App() {
  return (
    <Router>
      <Navbar />
      <Container>
        <Route path="/" component={Grid} />
      </Container>
    </Router>
  );
}

export default App;
