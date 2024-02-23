import { useEffect, useState } from 'react';
import PokeCard from '../PokeCard';
import data from '../../data';
import { Pokes, getPokes } from '../../api/poke';
import useFetch from '../../hooks/useFetch';
import filter from '../../utils/filter';
import Loader from '../Loader';

interface Props {
  searchWord: string;
}

function PokeData(props: Props) {
  const [pokes, setPokes] = useState<Pokes | null>(null);
  const [getPokesFromApi, loading, error] = useFetch<string>(async (url) => {
    const pokes: Pokes = await getPokes(url);
    setPokes(filter(pokes, props.searchWord));
  });

  useEffect(() => {
    getPokesFromApi(data.pokeApi);
  }, [props.searchWord]);

  return (
    <div className="poke-data container">
      {loading && <Loader />}
      {!loading && !pokes?.results.length && <h2>Sorry, not found.</h2>}
      {error ? (
        <h2>Something went wrong: {error.message}</h2>
      ) : (
        pokes?.results.map((result) => (
          <PokeCard
            key={result.name}
            name={`${result.name[0].toUpperCase()}${result.name.slice(1)}`}
            url={result.url}
          />
        ))
      )}
    </div>
  );
}

export default PokeData;
