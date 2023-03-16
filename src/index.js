import React from "react";
import ReactDom from "react-dom";

//v16 er upore amra div er bodole array akare  render korte pari [h1,h2 amne likhbo], document.getElementByID("root")
const fname = "Sazzadur";
const lname = "Rahman";
//varibale k access korte hole {} er vitor variable name dite hbe
const currentDate = new Date().toLocaleDateString();
const currentTime = new Date().toLocaleTimeString(); //local machine er time dekhabe
ReactDom.render(
  //div use korle div er virote arakta div hoye jay tai amra fragment use korbo jate extra div na create hoy
  <>
    <h1>Hello world!!</h1>
    <h4>
      Are you enjoying coding In React js? here multiple element is rendering at
      the same time using a div tag as render method takes only single element.
      this div tag teats the elements as a single div element
    </h4>
    <h1>{`${fname} ${lname}s Top 5 Netflix Series are:`}</h1>
    <h2>Today's current date: {currentDate} </h2>
    <h2>Today's current Time: {currentTime} </h2>
    <ol>
      <li>Apaharan</li>
      <li>Wandavishon</li>
      <li>Flash</li>
      <li>Arrow</li>
      <li>Super Girl</li>
    </ol>
  </>,
  document.getElementById("root")
);
