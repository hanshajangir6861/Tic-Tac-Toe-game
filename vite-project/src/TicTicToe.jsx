import React from 'react'
import './TicTicToe.css'
import './circle.png'

function TicTicToe() {
  return (
    <div className='container'>
      <h1 className='title'> Tic Tac Toe game in <span>React</span></h1>

      <div className='board'>

        <div id="row1">
          <div className="boxes"></div>
          <div className="boxes"></div>
          <div className="boxes"></div>
        </div>

        <div id="row2">
          <div className="boxes"></div>
          <div className="boxes"></div>
          <div className="boxes"></div>
        </div>

        <div id="row3">
          <div className="boxes"></div>
          <div className="boxes"></div>
          <div className="boxes"></div>
        </div>

      </div>
      <button className='reset'>React</button>
    </div>
  )
}

export default TicTicToe