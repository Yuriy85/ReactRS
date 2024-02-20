import { Component } from 'react';
import Search from '../components/Search/index';
import ErrorButton from '../components/ErrorButton';

class App extends Component {
  render() {
    return (
      <>
        <header></header>
        <main>
          <h1>ReactRS</h1>
          <ErrorButton />
          <Search />
          <div className="data container"></div>
        </main>
        <footer></footer>
      </>
    );
  }
}

export default App;
