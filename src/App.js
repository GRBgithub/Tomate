/** @format */

import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Test from "./Test";

import styled from "styled-components";

function App() {
  return (
    <Element>
      <div className="App">
        <Test></Test>
      </div>
    </Element>
  );
}

const Element = styled.div`
  .App {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default App;
