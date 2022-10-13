import './styles.scss';

import { useEffect, useState } from 'react';

import Description from '../../components/Description';
import Header from '../../components/Header';
import Others from '../../components/Others';
import Pokemon from '../../interfaces/pokemon';

const Pokedex = () => {
  const [pokemon, setPokemon] = useState<Pokemon | undefined>();
  const [pokemonId, setPokemonId] = useState(() => Math.floor(Math.random() * 80));

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
      .then((res) => res.json())
      .then((pokemon) => {
        setPokemon({
          id: pokemon.id,
          name: pokemon.name,
          img: pokemon.sprites.other['official-artwork'].front_default,
          level: Math.floor(Math.random() * 100) + 1,
          type: pokemon.types[0].type.name,
          ability: pokemon.abilities[0].ability.name,
          height: pokemon.height,
          weight: pokemon.weight,
        });
      });
  }, [pokemonId]);

  return (
    <div className="pokedex">
      <div className="container">
        <Header />
        {pokemon && <Description pokemon={pokemon} />}
        <Others setPokemonId={setPokemonId} />
      </div>
    </div>
  );
};

export default Pokedex;
