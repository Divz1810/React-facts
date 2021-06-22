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

ReactDOM.render(
  <div>
    <h1>My Skills</h1>
    <ul>
      <img
        className="skill-img"
        src="https://tse4.mm.bing.net/th?id=OIP.SADZ9CkWXMQVH1HpxamqdAHaE4&pid=Api&P=0&w=236&h=156"
        alt="node"
      ></img>
      <img
        className="skill-img"
        src="https://tse4.mm.bing.net/th?id=OIP.s4-3twOVbpbGEvYDHcopAwHaD8&pid=Api&P=0&w=314&h=168"
        alt="react"
      ></img>
      <img
        className="skill-img"
        src="https://tse3.mm.bing.net/th?id=OIP.3of4QJ65oynrDrNpgHYXTgHaD4&pid=Api&P=0&w=323&h=170"
        alt="js"
      ></img>
    </ul>
  </div>,
  document.getElementById("root")
);

//******ADDING JS INSIDE HTML*****
// const name = "Divyanshi";
// const lastName = "Mishra";
// const number = "29";
// ReactDOM.render(
//   <div>
//     <h1>
//       Hello I am {name} {lastName}!
//     </h1>
//     <p>My lucky number is {number}</p>
//   </div>,
//   document.getElementById("root")
// );
//we can write any js expression inside {} but not any statement .only expressions are alllowed.

//*****ADDING CURRENT YEAR*****
// const name = "Divyanshi";
// const lastName = "Mishra";
// ReactDOM.render(
//   <div>
//     <h1 className="heading">
//       Created by {name} {lastName}!
//     </h1>
//     <p> Copyright {new Date().getFullYear()} </p>
//   </div>,
//   document.getElementById("root")
// );
