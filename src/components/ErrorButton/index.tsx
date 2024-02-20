import { Component } from 'react';

class ErrorButton extends Component {
  render() {
    return (
      <button
        onClick={() => {
          throw new Error("It's my fault!!!");
        }}
        style={{ margin: '0 auto', display: 'block' }}
        className="button"
      >
        Error
      </button>
    );
  }
}

export default ErrorButton;
