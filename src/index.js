import React, { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom';

import './style.css';

function Tik() {
  const [arr, setArr] = useState(new Array(9).fill(null));
  const [gameOver, setGameOver] = useState(false);
  const [winner, setWinner] = useState(null);

  const handleClick = (i) => {
    if (!gameOver && arr[i] === null) {
      const updatedArr = [...arr];
      const val = updatedArr.filter((el) => el !== null).length;
      const txo = val % 2 === 0 ? 'X' : 'O';
      updatedArr[i] = txo;
      setArr(updatedArr);
      console.log(updatedArr);

      if (calculateWinner(updatedArr, i)) {
        console.log('Winner: ' + updatedArr[i]);
        setWinner(updatedArr[i]);
        setGameOver(true);
      }
      if(val===8){
        setGameOver(true);
      }
    }
  };

  function calculateWinner(squares, l) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] !== null &&
        squares[b] !== null &&
        squares[c] !== null &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        console.log(a, b, c);
        return true;
      }
    }

    return false;
  }

  return (
    <div style={{ backgroundColor: 'lightblue' }}>
      <p id="win">TIC-TAC-TOE</p>
      <div id="a">
        <div id="item1">
          <Square onSquareClick={() => handleClick(0)} v="1" value={arr[0]} />
        </div>
        <div id="item2">
          <Square onSquareClick={() => handleClick(1)} v="2" value={arr[1]} />
        </div>
        <div id="item3">
          <Square onSquareClick={() => handleClick(2)} v="3" value={arr[2]} />
        </div>
        <div id="item4">
          <Square onSquareClick={() => handleClick(3)} v="4" value={arr[3]} />
        </div>
        <div id="item5">
          <Square onSquareClick={() => handleClick(4)} v="5" value={arr[4]} />
        </div>
        <div id="item6">
          <Square onSquareClick={() => handleClick(5)} v="6" value={arr[5]} />
        </div>
        <div id="item7">
          <Square onSquareClick={() => handleClick(6)} v="7" value={arr[6]} />
        </div>
        <div id="item8">
          <Square onSquareClick={() => handleClick(7)} v="8" value={arr[7]} />
        </div>
        <div id="item9">
          <Square onSquareClick={() => handleClick(8)} v="9" value={arr[8]} />
        </div>
      </div>
      {gameOver && <p id="win">{winner ? `Winner: ${winner}` : 'Draw'}</p>}
    </div>
  );
}

function Square(props) {
  return (
    <button id="z" onClick={props.onSquareClick}>
      {props.value}
    </button>
  );
}

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Tik />
  </StrictMode>
);
