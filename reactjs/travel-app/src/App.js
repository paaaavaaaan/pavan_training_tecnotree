import React from 'react';

class App extends React.Component {
  state = {
    destinations: [
      { name: 'Coorg', description: 'The Scotland of India', imageUrl: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/62/9d/cd/caption.jpg?w=300&h=300&s=1' },
      { name: 'Mysore', description: 'City of Palaces', imageUrl: '	https://i.pinimg.com/474x/f8/e9/7f/f8e97f4ffc93d95cc8f3b6d91707688f.jpg'},
      { name: 'Chikmagalur', description: 'The land of hills', imageUrl: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/b0/6f/c4/caption.jpg?w=300&h=300&s=1' },
    ]
  }
handleClick=()=>{
  alert('Booked!!!');
}
  render() {
    return (
      <div>
        <h1>Travel Destinations</h1>
        <ul>
          {this.state.destinations.map((destination, index) => (
            <li key={index}>
              <h2>{destination.name}</h2>
              <p>{destination.description}</p>
              <img src={destination.imageUrl} alt={destination.name} />
              <br></br><button onClick={this.handleClick}>Select</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
