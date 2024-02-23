import { useEffect, useState } from 'react';
import { PokeInfo, getPokeInfo } from '../../api/poke';
import useFetch from '../../hooks/useFetch';

interface Props {
  name: string;
  url: string;
}

function PokeCard(props: Props) {
  const [pokeData, setPokeData] = useState<PokeInfo>();
  const [getPokeData, loading, error] = useFetch<string>(async (url) => {
    const pokeData = await getPokeInfo(url);
    setPokeData(pokeData);
  });

  useEffect(() => {
    getPokeData(props.url);
  }, []);

  return (
    <div className="poke-data__card">
      {error ? (
        <h2>
          {props.name} <br /> <span>Something went wrong: {error.message}</span>
        </h2>
      ) : (
        <>
          <h2>{loading ? 'Loading...' : props.name}</h2>
          <p>Size: {(pokeData as PokeInfo)?.size}</p>
          <p>Firmness: {(pokeData as PokeInfo)?.firmness.name}</p>
          <p>Gift type: {(pokeData as PokeInfo)?.natural_gift_type.name}</p>
          <p>Gift power: {(pokeData as PokeInfo)?.natural_gift_power}</p>
          <p>Growth time: {(pokeData as PokeInfo)?.growth_time}</p>
          <p>Smoothness: {(pokeData as PokeInfo)?.smoothness}</p>
          <p>Growth time: {(pokeData as PokeInfo)?.growth_time}</p>
          <p>Max harvest: {(pokeData as PokeInfo)?.max_harvest}</p>
        </>
      )}
    </div>
  );
}

export default PokeCard;
