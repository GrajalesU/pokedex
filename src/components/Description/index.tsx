import './styles.scss';

import Pokemon from '../../interfaces/pokemon';
interface Props {
  pokemon: Pokemon;
}

const Description = ({ pokemon }: Props) => {
  return (
    <main className="pokemon">
      <div>
        <h1 className="pokemonName">{pokemon.name}</h1>
        <img src={pokemon.img} alt="charizard fan art" className="pokemonImage" />
      </div>
      <table className="pokemonDescription">
        <tr className="pokemonDescriptionElement">
          <td>NO.</td>
          <td>{pokemon.id}</td>
        </tr>
        <tr className="pokemonDescriptionElement">
          <td>LEVEL</td>
          <td>{pokemon.level}</td>
        </tr>
        <tr className="pokemonDescriptionElement">
          <td>TYPE</td>
          <td>{pokemon.type}</td>
        </tr>
        <tr className="pokemonDescriptionElement">
          <td>ABILITY</td>
          <td>{pokemon.ability}</td>
        </tr>
        <tr className="pokemonDescriptionElement">
          <td>HEIGHT</td>
          <td
            style={{
              textTransform: 'lowercase',
            }}
          >
            {pokemon.height} m
          </td>
        </tr>
        <tr className="pokemonDescriptionElement">
          <td>WEIGHT</td>
          <td
            style={{
              textTransform: 'lowercase',
            }}
          >
            {pokemon.weight} Kg
          </td>
        </tr>
      </table>
    </main>
  );
};

export default Description;
