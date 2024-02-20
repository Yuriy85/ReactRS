import { Component, ReactNode } from 'react';

interface Props {
  children?: ReactNode;
}

interface State {
  age: number;
}

class App extends Component<Props, State> {
  public state: State = {
    age: 1,
  };
  componentDidMount() {
    console.log(1);
  }
  componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>): void {
    console.log(prevProps, prevState);
  }
  componentWillUnmount() {
    console.log(2);
  }
  render() {
    return (
      <>
        <header></header>
        <main>
          <h1>ReactRS</h1>
          <div className="search container">
            <input className="search__input input"></input>
            <button className="search__button button">Search</button>
          </div>
          <div className="data container"></div>
        </main>
        <footer></footer>
      </>
    );
  }
}

export default App;
