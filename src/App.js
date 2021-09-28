import { useState } from 'react';
import './App.css';
import GameCard from './GameCard';
import Home from "./Home"

function App() {
  const [grid, setGrid] = useState()
  const [players, setPlayers] = useState()
  const [clicked, setClicked] = useState(false)

  const onPlayerHandler = (e) => {
    setPlayers(e.target.value)
    setClicked(false)
  }

  const onGridHandler = (e) => {
    setGrid(e.target.value)
    setClicked(false)
  }

  const onSubmitHandler = () => {
    setClicked(true)
  }

  return (
    <div className="App">
      <Home onGridChange={onGridHandler} onPlayerChange={onPlayerHandler} onClick={onSubmitHandler} />
      {clicked ? <GameCard grid={grid} players={players} /> : ""}
    </div>
  );
}

export default App;
