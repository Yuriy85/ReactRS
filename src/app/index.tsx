import { useState } from 'react';
import Search from '../components/Search/index';
import ErrorButton from '../components/ErrorButton';
import PokeData from '../components/PokeData';
import ErrorBoundary from '../components/ErrorBoundary';
import Pagination from '../components/Pagination';

function App() {
  const [searchWord, setSearchWord] = useState(localStorage.getItem('search') || '');
  const [pagesParams, setPagesParams] = useState([0]);
  const [activePage, setActivePage] = useState(0);

  return (
    <>
      <header></header>
      <main>
        <h1>Poke berry</h1>
        <ErrorBoundary>
          <ErrorButton />
          <Search setSearchWord={setSearchWord} />
          <PokeData
            searchWord={searchWord}
            activePage={activePage}
            pagesParams={pagesParams}
            setPagesParams={setPagesParams}
          />
          {pagesParams.length > 1 && (
            <Pagination
              pagesParams={pagesParams}
              activePage={activePage}
              setActivePage={setActivePage}
            />
          )}
        </ErrorBoundary>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
