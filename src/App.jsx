import { useState } from "react";
import Team from "./components/Team/Team";
import { pokemonData } from "./data/pokemon";
import BattleResult from "./components/BattleResult/BattleResult";
import styles from "./App.module.css";

function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [team1, setTeam1] = useState([]);
  const [team2, setTeam2] = useState([]);
  function startBattle() {
    const newTeam1 = [...pokemonData];
    const newTeam2 = [];
    while (newTeam2.length < newTeam1.length) {
      const randomNumber = Math.floor(Math.random() * newTeam1.length);
      const deleteRandomPokemon = newTeam1.splice(randomNumber, 1);
      newTeam2.push(deleteRandomPokemon[0]);
    }
    setTeam1(newTeam1);
    setTeam2(newTeam2);
    setGameStarted(true);
  }

  return (
    <div className={styles.app}>
      <h1 className={styles.title}>Pokemon Game</h1>
      <button className={styles.battleButton} onClick={startBattle}>
        Start Battle ⚔️
      </button>
      {gameStarted && (
        <>
          <Team pokemons={team1} title="Team 1" />
          <Team pokemons={team2} title="Team 2" />
          <BattleResult team1={team1} team2={team2} />
        </>
      )}
    </div>
  );
}

export default App;
