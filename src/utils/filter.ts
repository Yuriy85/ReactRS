import { Pokes } from '../api/poke';

export default function filter(pokeData: Pokes, searchWord: string) {
  const filteredPokeData: Pokes = Object.create(pokeData);
  const result = pokeData.results.filter((poke) =>
    poke.name.toLowerCase().includes(searchWord.toLowerCase().trimStart())
  );
  filteredPokeData.results = result;
  return filteredPokeData;
}
