import { Component } from 'react';
import { Poke, getPoke } from '../../api/poke';

interface Props {
  name: string;
  url: string;
}

interface State {
  error: string;
  pokeData: Poke;
}

class PokeCard extends Component<Props, State> {
  async componentDidMount(): Promise<void> {
    try {
      const pokeData = await getPoke(this.props.url);
      this.setState({ pokeData });
    } catch (error) {
      this.setState({ error: error as string });
    }
  }
  render() {
    return (
      <div className="poke-data__card">
        {!this.state ? (
          <h2>Loading...</h2>
        ) : (
          <>
            <h2>{this.props.name}</h2>
            <p>Size: {this.state.pokeData.size}</p>
            <p>Firmness: {this.state.pokeData.firmness.name}</p>
            <p>Gift type: {this.state.pokeData.natural_gift_type.name}</p>
            <p>Gift power: {this.state.pokeData.gift_power}</p>
            <p>Growth time: {this.state.pokeData.growth_time}</p>
            <p>smoothness: {this.state.pokeData.smoothness}</p>
            <p>Growth time: {this.state.pokeData.growth_time}</p>
            <p>Max harvest: {this.state.pokeData.max_harvest}</p>
          </>
        )}
      </div>
    );
  }
}

export default PokeCard;
