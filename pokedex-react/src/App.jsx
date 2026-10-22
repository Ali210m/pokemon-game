import Team from "./components/Team/Team";
import { pokemonData } from "./data/pokemon";

function App() {
  const team1 = [...pokemonData];
  const team2 = [];

  while (team2.length <= team1.length) {
    const randomNumber = Math.floor(Math.random() * pokemonData.length);
    const deleteRandomPokemon = pokemonData.splice(randomNumber, 1);
    team2.push(deleteRandomPokemon[0]);
  }
  console.log(team1);
  console.log(team2);

  return (
    <div>
      <h1>My Pokemon Team</h1>
      <Team />
    </div>
  );
}

export default App;
