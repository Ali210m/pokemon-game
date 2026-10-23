import PokemonCard from "../PokemonCard/PokemonCard";
import styles from "./Team.module.css";

function Team({ pokemons, title }) {
  return (
    <div className={styles.team}>
      <h2 className={styles.teamTitle}>{title}</h2>
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
}

export default Team;
