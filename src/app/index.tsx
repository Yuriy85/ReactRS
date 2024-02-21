import { Component } from 'react';
import Search from '../components/Search/index';
import ErrorButton from '../components/ErrorButton';
import PokeData from '../components/PokeData';
import ErrorBoundary from '../components/ErrorBoundary';

class App extends Component {
  render() {
    return (
      <>
        <header></header>
        <main>
          <h1>Poke berry</h1>
          <ErrorBoundary>
            <ErrorButton />
            <Search />
            <PokeData />
          </ErrorBoundary>
        </main>
        <footer></footer>
      </>
    );
  }
}

export default App;
