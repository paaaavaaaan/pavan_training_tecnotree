
/*import React from 'react';
import Button from './compo/buttonn';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, World!</h1>
        <Button />
      </div>
    );
  }
}

export default App;*/
/*
import React from 'react';
import Counter from './compo/Counter';

function App() {
  return (
    <center>
    <div>
      <Counter />
    </div>
    </center>
  );
}

export default App;
*/
/*
import React from 'react';
import LoginForm from './compo/LoginForm';

function App() {
  return (
    <center>
    <div>
      <h1>Login Form</h1>
      <LoginForm />
    </div>
    </center>
  );
}
export default App;*/

/*import React, { Component } from 'react';

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  componentDidMount() {
    console.log('Component mounted');
  }

  componentDidUpdate() {
    console.log('Component updated');
  }

  componentWillUnmount() {
    console.log('Component will unmount');
  }

  incrementCount() {
    this.setState({ count: this.state.count + 1 });
  }
  decrementCount() {
    this.setState({ count: this.state.count - 1 });
  }

  render() {
    return (
      <center>
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={() => this.incrementCount()}>Increment</button>
        <button onClick={() => this.decrementCount()}>decrement</button>
      </div>
      </center>
    );
  }
}

export default MyComponent;*/
/*
import React from 'react';
import PasswordChecklist from './compo/password';
import PasswordInput from './Password';
import LoginForm from './compo/LoginForm';
function App() {
  return (
    <div class="Container">
       <div class="password">
      <h1>Enter Password</h1>
      <PasswordChecklist/>
      </div>

     
      <div class="Password">
      <h1>Enter Password</h1>
      <PasswordInput/>
      </div>
      <div class="LoginForm">
        <h1>LoginForm</h1>
      <LoginForm/>
      </div>
      
    </div>
  );
}

export default App;
*/
/*
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function Home() {
  return <h1>Welcome to the home page!</h1>;
}

function About() {
  return <h1>About us</h1>;
}

function Contact() {
  return <h1>Contact us</h1>;
}

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;*/

/*
import React, { useState } from 'react';

function PasswordInput() {
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => setShowPassword(!showPassword);

  return (
    <div>
      <label>
        Password:
        <input
          type={showPassword ? 'text' : 'password'}
          name="password"
        />
      </label>
      <button onClick={toggleShowPassword}>
        {showPassword ? 'Hide' : 'Show'}
      </button>
    </div>
  );
}
export default PasswordInput
*/
/*
import React from 'react';
import PasswordInput from './Password';

function App() {
  return (
    <center>
    <div>
      <h1>Enter Password</h1>
      <PasswordInput/>
    </div>
    </center>
  );
}
export default App;*/
/*
import React from 'react';
import PasswordChecklist from './compo/password';

function App() {
  return (
    <center>
    <div>
      <h1>Enter Password</h1>
      <PasswordChecklist/>
    </div>
    </center>
  );
}
export default App;*/

//AS1
/*
import React from 'react';
import ItemList from './compo/as1';

function App() {
  const items = ['Biryani', 'Sweets'];
  return (
    <div class="abc">
    <div class="def">
      <h1>My favourite food items</h1>
      <ItemList items={items} />
    </div>
    </div>
  );
}

export default App;
*/

//AS2
/*
import React, { useState } from 'react';

function ItemList(props) {
  const { items } = props;

  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

function MyComponent() {
  const [items, setItems] = useState(['SamsungS10 lite', 'HP elitebook 840 G8']);
  const [newItem, setNewItem] = useState('');

  const handleOrderItems = () => {
    setItems(items.sort());
    alert('Your list have been ordered!');
  }

  const handleNewItemChange = (event) => {
    setNewItem(event.target.value);
  }

  const handleAddItem = (event) => {
    event.preventDefault();
    setItems([...items, newItem]);
    setNewItem('');
  }

  return (
    <div>
      <h2>My Electronics item List</h2>
      <ItemList items={items} />
      <form onSubmit={handleAddItem}>
        <label>
          New Item:
          <input type="text" value={newItem} onChange={handleNewItemChange} />
        </label>
        <button type="submit">Add Item</button>
      </form>
      <button onClick={handleOrderItems}>Submit</button>
    </div>
  );
}

export default MyComponent;
*/
/*

import React, { useState, useEffect } from "react";

function CountdownTimer({ initialSeconds }) {
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    if (seconds=0) {
      const intervalId = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);

      return () => clearInterval(intervalId);
    }
  }, [seconds]);

  return (
    <div>
      <h1>Countdown Timer: {seconds}</h1>
      {seconds === 0 && <p>Time's up!</p>}
    </div>
  );
}

export default CountdownTimer;

*/

/*
import CountdownTimer from "./compo/as3";

function App() {
  return (
    <div>
      <CountdownTimer seconds={5} />
    </div>
  );
}

export default App;

*/
/*
import React from 'react';
import Slideshow from './compo/as4';

function App() {
  const images =['https://assets.hongkiat.com/uploads/100-absolutely-beautiful-nature-wallpapers-for-your-desktop/blue-sea-sunset.jpg',
                 'https://static.wixstatic.com/media/bb1bd6_bff16ec17b254ea9a802558f14af75e0~mv2.png/v1/fit/w_1000%2Ch_608%2Cal_c%2Cq_80,enc_auto/file.jpg',
                 'https://mobimg.b-cdn.net/v3/fetch/44/44b208e04a532e7077071d32baebf666.jpeg',
                 'https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__340.jpg'];
  
  const slideInterval = 2000; // 2 seconds

  return (
    <center>
    <div>
      <h1>My Slideshow</h1>
      <Slideshow images={images} slideInterval={slideInterval} />
    </div>
    </center>
  );
}

export default App; 

*/
/* tribiute to ab de villiers*/
import React from 'react';

function App() {
  return (
    <div>
      
      <h1>Tribute to Ab de villiers</h1>
     
      
      <img src="https://img.naidunia.com/naidunia/catch.gif_18_05_2018.jpg" alt="420"/>
      <p>Abraham Benjamin de Villiers (born 17 February 1984) is a former South African international cricketer. AB de Villiers was named as the ICC ODI Player of the Year three times during his 15-year international career and was one of the five Wisden cricketers of the decade at the end of 2019. He is regarded as one of the greatest cricketers in the history of the sport and the best batsman of his era. AB de Villiers began his international career as a wicket-keeper-batsman, but he has played most often solely as a batsman. He batted at various positions in the batting order, but predominantly in the middle-order. Regarded as one of the most innovative and destructive batsmen in the modern era, as well as one of the greatest of all time, de Villiers is known for a range of unorthodox shots, particularly behind the wicket-keeper.</p>
    <p>He made his international debut in a Test match against England in 2004 and first played a One Day International (ODI) in early 2005. His debut in Twenty20 International cricket came in 2006. He scored over 8,000 runs in both Test and ODI cricket and is one of the very few batsmen to have a batting average of over fifty in both forms of the game.In limited overs cricket, he is an attacking player. He holds the record for the fastest ODI century in just 31 balls.</p>
    <p>De Villiers captained South Africa in all three formats, although after a series of injuries, he stepped down from the Test captaincy. In 2017, he stepped down from captaining the national limited-overs games[8] and in May 2018, he announced his retirement from all forms of international cricket. In January 2020, however, de Villiers expressed an interest in making an international comeback and play in the 2020 T20 World Cup,[12] although later in the year it was confirmed that he would not do so. On 19 November 2021, De Villiers announced his retirement from all forms of cricket.</p>
    </div>
  );
  }

export default App;



