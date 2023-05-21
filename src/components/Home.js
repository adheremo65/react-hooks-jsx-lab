import React from "react";
import { name, city } from "../data/data.js";





function Home() {
  // const colorStyle = {
  //   color: 'firebrick'
  // }
  return <div id="home" >
    <h1 style={{color:"firebrick"}}> {name} is a Web Developer from  {city}</h1>
    Home 
    </div>
}

export default Home;
