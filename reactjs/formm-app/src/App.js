/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/

import React from 'react';

function Form() {
  return (
    <center>
    <form>
      <h1>Login Form</h1>
      <label htmlFor="username">Username:</label>
      <input type="text" name="username" id="username" placeholder="Enter your username" /><br></br><br></br><br></br>

      <label htmlFor="password">Password:</label>
      <input type="password" name="password" id="password" placeholder="Enter your password" /><br></br><br></br>

      <label htmlFor="email">Email:</label>
      <input type="email" name="email" id="email" placeholder="Enter your email" /><br></br><br></br>

      <label htmlFor="birthdate">Date of Birth:</label>
      <input type="date" name="birthdate" id="birthdate" /><br></br><br></br>

      <label htmlFor="gender">Gender:</label>
      <input type="radio" name="gender" id="male" value="male" />
      <label htmlFor="male">Male</label>

      <input type="radio" name="gender" id="female" value="female" />
      <label htmlFor="female">Female</label><br></br>
      &nbsp;
      <br></br>
      &nbsp;<button type="submit">Login</button>&nbsp;&nbsp;
      <button type="submit">Signup</button>&nbsp;&nbsp;
      <button type="submit">Cancel</button><br></br><br></br>
    
    </form>
    </center>
  );
}

export default Form;
