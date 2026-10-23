import styles from "./BattleResult.module.css";

function BattleResult({ team1, team2 }) {
  const team1TotalPower = team1.reduce(
    (total, pokemon) => total + pokemon.base_experience,
    0,
  );
  const team2TotalPower = team2.reduce(
    (total, pokemon) => total + pokemon.base_experience,
    0,
  );

  let resultMessage;
  if (team1TotalPower > team2TotalPower) {
    resultMessage = "Team 1 wins!";
  } else if (team1TotalPower < team2TotalPower) {
    resultMessage = "Team 2 wins!";
  } else {
    resultMessage = "It's a tie!";
  }

  return (
    <div className={styles.battleResult}>
      <h2 className={styles.battleResultTitle}>Battle Result</h2>

      <div className={styles.resultRow}>
        <p className={styles.teamPower}>
          Team 1:{" "}
          <strong className={styles.teamPowerValue}>{team1TotalPower}</strong>
        </p>

        <h3 className={styles.winner}>{resultMessage}</h3>

        <p className={styles.teamPower}>
          Team 2:{" "}
          <strong className={styles.teamPowerValue}>{team2TotalPower}</strong>
        </p>
      </div>
    </div>
  );
}

export default BattleResult;
