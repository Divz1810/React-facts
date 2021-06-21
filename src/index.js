//var React= require("react");
//var ReactDOM = require("react-dom");
import React from "react"; //mordern ES6 method to import.
import ReactDOM from "react-dom";

// ReactDOM.render(
//   <div>
//     <h1>Hello World!</h1>
//     <p> Hey again!</p>
//   </div>,
//   document.getElementById("root")
// );

// ReactDOM.render(
//   <div>
//     <h1>My Skills</h1>
//     <ul>
//       <li>Node js </li>
//       <li>React js </li>
//       <li> JS </li>
//     </ul>
//   </div>,
//   document.getElementById("root")
// );

//ADDING JS INSIDE HTML
const name = "Divyanshi";
const lastName = "Mishra";
const number = "29";
ReactDOM.render(
  <div>
    <h1>
      Hello I am {name} {lastName}!
    </h1>
    <p>My lucky number is {number}</p>
  </div>,
  document.getElementById("root")
);
//we can write any js expression inside {} but not any statement .only expressions are alllowed.
