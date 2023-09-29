import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// function custemEender() {
  // const domEl=document.createElement(ReactElment.type);
  // domEl.innerHTML=ReactElment.children;
  // domEl.setAttribute('href',ReactElment.props.href);
  // domEl.setAttribute('target',ReactElment.props.target);
  // rootEl.appendChild(domEl);

  // const domEl = document.createElement(ReactElment.type);
  // domEl.innerHTML = ReactElment.children;

 

  // for (let prop in ReactElment.props) {
  //   if(prop==="children") continue;
  //   domEl.setAttribute(prop, ReactElment.props[prop]);
  // }

  // rootEl.appendChild(domEl);
//}

// const ReactElment = {
//   type: "a",
//   props: {
//     href: "http://localhost:5173",
//     target: "_blanck",
//   },
//   children: "Click me to visite my web",
// };
// const rutting='hellow raunak you have to bath as well as as soon sa possible';

//  const newEl=React.createElement('a',{href:'http://localhost:5173',target:'_blanck'},rutting);


// const rootEl=ReactDOM.createRoot(document.getElementById("mainDiv"));
// rootEl.render(
//   newEl
// )


const rootsEl=ReactDOM.createRoot(document.getElementById("mainDiv"));


rootsEl.render(
 
    <App />
)