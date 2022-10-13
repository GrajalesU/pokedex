import './styles.scss';

const Description = () => {
  return (
    <main className="pokemon">
      <div>
        <h1 className="pokemonName">🔥 CHARIZARD</h1>
        <img
          src="src/assets/charizard.png"
          alt="charizard fan art"
          className="pokemonImage"
        />
      </div>
      <table className="pokemonDescription">
        <tr className="pokemonDescriptionElement">
          <td>NO.</td>
          <td>006</td>
        </tr>
        <tr className="pokemonDescriptionElement">
          <td>LEVEL</td>
          <td>100</td>
        </tr>
        <tr className="pokemonDescriptionElement">
          <td>TYPE</td>
          <td>FIRE</td>
        </tr>
        <tr className="pokemonDescriptionElement">
          <td>ABILITY</td>
          <td>FLAMES</td>
        </tr>
        <tr className="pokemonDescriptionElement">
          <td>HEIGHT</td>
          <td>1,7 m</td>
        </tr>
        <tr className="pokemonDescriptionElement">
          <td>WEIGHT</td>
          <td>90,5 Kg</td>
        </tr>
      </table>
    </main>
  );
};

export default Description;
