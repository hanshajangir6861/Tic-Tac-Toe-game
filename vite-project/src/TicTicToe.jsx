import React, { useState } from 'react'
import './TicTicToe.css'
import './cross.png' 
import './circle.png'

let data = ["","","","","","","","",""];


function TicTicToe() {

let [counter , setCounter] = useState(0)
const [lock , setLock] = useState(false)


const toggle = (e, num)=>{
if(lock){
  return 0;
}
if(counter%2===0){
  var imgElement = document.createElement("img");

  imgElement.src = './src/cross.png';

  e.target.appendChild(imgElement);

  data[num] = "x"
  setCounter(++counter)
}

else{

  var circle = document.createElement("img");

  circle.src = './src/circle.png';

  e.target.appendChild(circle);


  // e.target.innerHTML = `<img src = ${circle.png}>` ;
  data[num] = "o"
  setCounter(++counter)
}
}


  return (
    <div className='container'>
      <h1 className='title'> Tic Tac Toe game in <span>React</span></h1>

      <div className='board'>

        <div id="row1">
          <div className="boxes" onClick={(e)=>{toggle(e,0)}}></div>
          <div className="boxes" onClick={(e)=>{toggle(e,1)}}></div>
          <div className="boxes" onClick={(e)=>{toggle(e,2)}}></div>
        </div>

        <div id="row2">
          <div className="boxes" onClick={(e)=>{toggle(e,3)}}></div>
          <div className="boxes" onClick={(e)=>{toggle(e,4)}}></div>
          <div className="boxes" onClick={(e)=>{toggle(e,5)}}></div>
        </div>

        <div id="row3">
          <div className="boxes" onClick={(e)=>{toggle(e,6)}}></div>
          <div className="boxes" onClick={(e)=>{toggle(e,7)}}></div>
          <div className="boxes" onClick={(e)=>{toggle(e,8)}}></div>
        </div>

      </div>
      <button className='reset'>React</button>
    </div>
  )
}

export default TicTicToe