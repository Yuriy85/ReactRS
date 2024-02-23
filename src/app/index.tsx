import { useState } from 'react';
import Search from '../components/Search/index';
import ErrorButton from '../components/ErrorButton';
import PokeData from '../components/PokeData';
import ErrorBoundary from '../components/ErrorBoundary';
import Pagination from '../components/Pagination';

function App() {
  const [searchWord, setSearchWord] = useState(localStorage.getItem('search') || '');
  const [pagesParams, setPagesParams] = useState([0]);
  const [ctyPerPage, setQtyPerPage] = useState(10);
  const [activePage, setActivePage] = useState(0);

  return (
    <>
      <header></header>
      <main>
        <h1>Poke berry</h1>
        <ErrorBoundary>
          <div className="container">
            <ErrorButton />
            <select
              onChange={(event) => {
                setQtyPerPage(+event.target.value);
                setActivePage(0);
              }}
              className="select"
            >
              <option disabled>Choose cty per page</option>
              <option value={10}>Ten per page</option>
              <option value={5}>Five per page</option>
              <option value={7}>Seven per page</option>
              <option value={20}>Twenty per page</option>
            </select>
          </div>
          <Search setSearchWord={setSearchWord} />
          <PokeData
            searchWord={searchWord}
            activePage={activePage}
            ctyPerPage={ctyPerPage}
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
