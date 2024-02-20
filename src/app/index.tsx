import { Component } from 'react';
import Search from '../components/Search/index';
import ErrorButton from '../components/ErrorButton';
import PokeData from '../components/PokeData';

class App extends Component {
  render() {
    return (
      <>
        <header></header>
        <main>
          <h1>ReactRS</h1>
          <ErrorButton />
          <Search />
          <PokeData />
        </main>
        <footer></footer>
      </>
    );
  }
}

export default App;
