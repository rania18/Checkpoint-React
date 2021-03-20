import logo from "./logo.svg";
import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { Button, Alert, Row, Col } from "react-bootstrap";
import Menu from "./components/Menu";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

function App() {
  return (
    <div className="App">
      <Menu />
      <Row className="landing">
      <Col><SignUp /></Col>  
      <Col><SignIn /></Col>
      
      </Row>
    </div>
  );
}

export default App;
