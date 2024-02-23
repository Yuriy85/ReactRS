import { Dispatch, useEffect, useState } from 'react';

interface Props {
  setSearchWord: Dispatch<React.SetStateAction<string>>;
}

function Search(props: Props) {
  const [searchValue, setSearchValue] = useState('');
  const setWord = () => {
    props.setSearchWord(searchValue);
    localStorage.setItem('search', searchValue);
  };

  useEffect(() => {
    const searchText = localStorage.getItem('search');
    if (searchText) {
      setSearchValue(searchText);
    }
  }, []);

  return (
    <div className="search container">
      <input
        value={searchValue}
        className="search__input"
        onKeyDown={(event) => event.key === 'Enter' && setWord()}
        onChange={(event) => setSearchValue(event.currentTarget.value)}
      ></input>
      <button onClick={() => setWord()} className="search__button">
        Search
      </button>
    </div>
  );
}

export default Search;
