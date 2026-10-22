import styles from "./PokemonCard.module.css";

function PokemonCard({ pokemon }) {
  const pokemonId = String(pokemon.id).padStart(3, "0");
  const pokemonImgId = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokemonId}.png`;
  return (
    <div className={styles.card}>
      <img className={styles.image} src={pokemonImgId} alt={pokemon.name} />
      <h2 className={styles.name}>{pokemon.name}</h2>
      <p className={styles.type}>Type: {pokemon.type}</p>
      <p className={styles.experience}>
        Base Experience: {pokemon.base_experience}
      </p>
    </div>
  );
}

export default PokemonCard;
