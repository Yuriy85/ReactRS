import { useEffect, useState } from 'react';
import { Poke, getPoke } from '../../api/poke';
import useFetch from '../../hooks/useFetch';

interface Props {
  name: string;
  url: string;
}

function PokeCard(props: Props) {
  const [pokeData, setPokeData] = useState<Poke>();
  const [getPokeData, loading, error] = useFetch<string>(async (url) => {
    const pokeData = await getPoke(url);
    setPokeData(pokeData);
  });

  useEffect(() => {
    if (pokeData) {
      return;
    }
    getPokeData(props.url);
  });

  return (
    <div className="poke-data__card">
      {error ? (
        <h2>
          {props.name} <br /> <span>Something went wrong: {error.message}</span>
        </h2>
      ) : (
        <>
          <h2>{loading ? 'Loading...' : props.name}</h2>
          <p>Size: {(pokeData as Poke)?.size}</p>
          <p>Firmness: {(pokeData as Poke)?.firmness.name}</p>
          <p>Gift type: {(pokeData as Poke)?.natural_gift_type.name}</p>
          <p>Gift power: {(pokeData as Poke)?.gift_power}</p>
          <p>Growth time: {(pokeData as Poke)?.growth_time}</p>
          <p>Smoothness: {(pokeData as Poke)?.smoothness}</p>
          <p>Growth time: {(pokeData as Poke)?.growth_time}</p>
          <p>Max harvest: {(pokeData as Poke)?.max_harvest}</p>
        </>
      )}
    </div>
  );
}

export default PokeCard;
