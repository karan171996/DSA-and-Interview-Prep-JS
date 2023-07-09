import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

export function Square({value, onSquareClick}){

  return <button className="square" onClick={onSquareClick}>{value}</button>
}
export function Board(){
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [xisNext, setXisNext] = useState(true);

  function handleClick(i){
    if(squares[i] || calculateWinner(squares)){
      return;
    }

    const nextSquares = squares.slice();
    if(xisNext){
      nextSquares[i] = "X";
    }else{
      nextSquares[i] = "0";
    }
    setXisNext(!xisNext);
    setSquares(nextSquares);
  }
  const winner = calculateWinner(squares);

  let status;
  if(winner){
    status = "Winnner: " + winner;
  }else{
    status = "Next Player: " + (xisNext ? "X": "0");
  }
  return (
    <>
      <div className="status">{status}</div>

    <div className="row-board">
      <Square value={squares[0]} onSquareClick={()=> handleClick(0)} />
      <Square value={squares[1]} onSquareClick={()=> handleClick(1)} />
      <Square value={squares[2]} onSquareClick={()=> handleClick(2)} />
    </div>
    <div className="row-board">
      <Square value={squares[3]} onSquareClick={()=> handleClick(3)} />
      <Square value={squares[4]} onSquareClick={()=> handleClick(4)} />
      <Square value={squares[5]} onSquareClick={()=> handleClick(5)} />
    </div>
    <div className="row-board">
      <Square value={squares[6]} onSquareClick={()=> handleClick(6)} />
      <Square value={squares[7]} onSquareClick={()=> handleClick(7)} />
      <Square value={squares[8]} onSquareClick={()=> handleClick(8)} />
    </div>
    </>
    )
}

function calculateWinner(squares){
  const lines = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
    ];

  for(let i=0; i< lines.length;i++){
    const [a,b,c] = lines[i];
    if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
      return squares[a];
    }
  }
  return null;
}

function App() {
  const [count, setCount] = useState(0)

  return (
   <Board />
  )
}

export default App
