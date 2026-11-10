import './App.css';
import {useState} from "react";
import Header from './Header';
import Board from './Board';
import Reset from './Reset';

const PLAYERRX = "Player 1 - Xs";
const PLAYER0 = "Player 2 - 0s";

function App() {
  const [turn, setTurn] = useState(PLAYERX);
  const [values, setValues] = useState([
    ["X", "-", "-"],
    ["-", "-", "-"],
    ["-", "-", "-"]
  ]);

  const [moves, setMoves] = useState(0);

  function appClick(rowNumber, columnNumber){
    console.log("CLICK en " + rowNumber + columnNumber);
    let valuesCopy = JSON.parse(JSON.stringify(values));
    let newMovement = turn===PLAYERX ? "X" : "0";
    valuesCopy[rowNumber][columnNumber] = newMovement;
    setTurn(turn===PLAYERX ? PLAYER0 : PLAYERX);
    setValues(valuesCopy);
    setMoves(moves=>moves+1);
  }

  function resetClick(){
    console.log("RESET");
    setTurn(PLAYERX);
    setValues([
      ["X", "-", "-"],
      ["-", "-", "-"],
      ["-", "-", "-"]
    ]);
    setMoves(0);
  }

  return (
    <div className="App">
      <h2>TicTacToe</h2>
      <Header turn={turn}/>
      <Board values={values} appClick={appClick}/>
      <h3>Número de movimientos: {moves}</h3>
      <Reset resetClick={resetClick}/>
    </div>
  );
}

export default App;
