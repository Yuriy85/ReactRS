import { Component } from 'react';

interface State {
  search: string;
}

class Search extends Component {
  public state: Readonly<State> = {
    search: '',
  };
  componentDidMount(): void {
    const searchText = localStorage.getItem('search');
    if (searchText) {
      this.setState({ search: searchText });
    }
  }
  componentDidUpdate(): void {
    localStorage.setItem('search', this.state.search);
  }

  render() {
    return (
      <div className="search container">
        <input
          value={this.state.search}
          className="search__input input"
          onChange={(event) => {
            this.setState({ search: event.currentTarget.value });
          }}
        ></input>
        <button className="search__button button">Search</button>
      </div>
    );
  }
}

export default Search;
