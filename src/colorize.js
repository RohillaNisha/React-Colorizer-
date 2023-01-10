import React from 'react'
import { useState} from "react";

const Colorize = () => {
    const [color, setColor] = useState("#6d0e0e");
   
    // const changeColor = () => {
    //     setColor("green"); // we use setColor instead of change current state.

    // }

    const getRandomColor = () => {
        const random = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
        return random;
    }

    const changeColor = () => {
        const randomColor = getRandomColor();
        setColor(randomColor);
    }
  return (
    <div className="colorize"> 
    <div className="box" style={{backgroundColor: color}}> {color} </div>
    <button onClick={changeColor}> Change Color</button></div>
  )
}

export default Colorize;