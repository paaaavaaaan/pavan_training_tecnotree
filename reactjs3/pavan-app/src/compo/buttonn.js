import React from 'react';

class Button extends React.Component {
  handleClick = () => {
    console.log('Button clicked!');
  };

  render() {
    return (
      <button onClick={this.handleClick}>
        Click me!
      </button>
    );
  }
}

export default Button;