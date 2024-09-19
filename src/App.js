import React from "react";
import HelloWorldComponent from "./HelloWorldComponent";
import MyClassComponent from "./MyClassComponent";
import './App.css';

function App() {
 

  const hello = "Hello world";
  const number = 2;
 
   return (
   <div className="App">
     

      <header className="App-header">
      <p>{hello}</p>
      <p>
         Edit <code>src/App.js</code> and save to reload.
      </p>
     
       {number === 1 ? <HelloWorldComponent/> : "There is no component found"}
       <MyClassComponent/>
   </header> 
    </div>
   );
}

export default App;
