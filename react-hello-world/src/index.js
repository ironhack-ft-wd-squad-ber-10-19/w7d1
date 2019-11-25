// const React = require('react')
import React from "react";
import ReactDOM from "react-dom";

import "./style.css";

const name = "John Doe";

const imageUrl =
  "https://www.wwf.org.uk/sites/default/files/styles/hero_s/public/2016-09/Medium_WW22557_0.jpg?h=6c69e056&itok=whezEuT3";

const myStyle = {
  color: "papayawhip",
  backgroundColor: "bisque"
};

const greeting = (
  <div>
    <h1 className="heading">
      Hello {name} {6 * 7}!
    </h1>
    <p style={myStyle}>This is a random number: {Math.random()}</p>
    <img src={imageUrl} height="200px"></img>
  </div>
);

ReactDOM.render(greeting, document.getElementById("root"));
