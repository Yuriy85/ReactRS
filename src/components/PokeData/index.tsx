import { Component, ReactNode } from 'react';
import PokeCard from '../PokeCard';
import data from '../../data';
import { Pokes, getPokes } from '../../api/poke';

interface Props {
  children?: ReactNode;
}

interface State {
  pokes: Pokes | '';
  error: string;
}

class PokeData extends Component<Props, State> {
  public state: State = {
    pokes: '',
    error: '',
  };

  setUpperChar(string: string) {
    return `${string[0].toUpperCase()}${string.slice(1)}`;
  }

  async componentDidMount(): Promise<void> {
    try {
      const pokeData = await getPokes(data.pokeApi);
      this.setState({ pokes: pokeData });
    } catch (error) {
      this.setState({ error: error as string });
    }
  }

  render() {
    return (
      <div className="poke-data container">
        {!this.state.pokes ? (
          <h2>Loading...</h2>
        ) : (
          this.state.pokes.results.map((result) => (
            <PokeCard key={result.name} name={this.setUpperChar(result.name)} url={result.url} />
          ))
        )}
      </div>
    );
  }
}

export default PokeData;
