import { useState } from 'react';
import Search from '../components/Search/index';
import ErrorButton from '../components/ErrorButton';
import PokeData from '../components/PokeData';
import ErrorBoundary from '../components/ErrorBoundary';

function App() {
  const [searchWord, setSearchWord] = useState(localStorage.getItem('search') || '');

  return (
    <>
      <header></header>
      <main>
        <h1>Poke berry</h1>
        <ErrorBoundary>
          <ErrorButton />
          <Search
            setSearchWord={(word: string) => {
              setSearchWord(word);
              localStorage.setItem('search', word);
            }}
          />
          <PokeData searchWord={searchWord} />
        </ErrorBoundary>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
