/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import './styles.scss';

import { useEffect, useState } from 'react';

import Loader from '../Loader';

interface Props {
  setPokemonId: React.Dispatch<React.SetStateAction<number>>;
}

const Others = ({ setPokemonId }: Props) => {
  const [others, setOthers] = useState<Array<{ id: string; img: string }> | undefined>();

  const getRandomPokemonImages = () => {
    const randomNumbers = [];
    for (let index = 0; index < 5; index++) {
      randomNumbers.push(Math.floor(Math.random() * 800));
    }
    const randomPokemons = randomNumbers.map((number) =>
      fetch(`https://pokeapi.co/api/v2/pokemon/${number}`),
    );

    Promise.all(randomPokemons)
      .then((res) => Promise.all(res.map((e) => e.json())))
      .then((pokemons) =>
        pokemons.map((pokemon) => {
          return {
            img: pokemon.sprites.other['official-artwork'].front_default,
            id: pokemon.id,
          };
        }),
      )
      .then((result) => {
        setOthers([...result]);
      });
  };

  const getRandomPokemonImage = (id: number) => {
    const randomNumber = Math.floor(Math.random() * 800);
    fetch(`https://pokeapi.co/api/v2/pokemon/${randomNumber}`)
      .then((e) => e.json())
      .then((pokemon) => {
        return {
          img: pokemon.sprites.other['official-artwork'].front_default,
          id: pokemon.id,
        };
      })
      .then((result) => {
        const currentValues = others && [...others];
        if (currentValues) currentValues[id] = result;
        setOthers(currentValues);
      });
  };

  useEffect(() => {
    getRandomPokemonImages();
  }, []);
  return (
    <footer className="others">
      <h2 className="othersTitle">OTHERS</h2>
      {others ? (
        <ul className="othersList">
          <li
            className="othersListElement"
            onClick={() => {
              setPokemonId(parseInt(others[0].id));
              getRandomPokemonImage(0);
            }}
          >
            <img src={others[0].img} alt="other pokemon fan art" />
          </li>
          <li
            className="othersListElement"
            onClick={() => {
              setPokemonId(parseInt(others[1].id));
              getRandomPokemonImage(1);
            }}
          >
            <img src={others[1].img} alt="other pokemon fan art" />
          </li>
          <li
            className="othersListElement"
            onClick={() => {
              setPokemonId(parseInt(others[2].id));
              getRandomPokemonImage(2);
            }}
          >
            <img src={others[2].img} alt="other pokemon fan art" />
          </li>
          <li
            className="othersListElement"
            onClick={() => {
              setPokemonId(parseInt(others[3].id));
              getRandomPokemonImage(3);
            }}
          >
            <img src={others[3].img} alt="other pokemon fan art" />
          </li>
        </ul>
      ) : (
        <Loader />
      )}
    </footer>
  );
};

export default Others;
