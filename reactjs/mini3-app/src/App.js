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

export default App;
*/
import React from 'react';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>About Me</h1>
        <p>Hi there! My name is Pavan </p>
      </header>

      <section>
        <h2>Projects</h2>
        <ol>
          <li>
            <h3>Project 1</h3>
            <p>Autonomous fire extinguishing bot.</p>
          </li>
          <li>
            <h3>Project 2</h3>
            <p>Design of acetone sensor using <br></br>comsol multiphysics software.</p>
          </li>
          
        </ol>
      </section>

      <section>
        <h2>Skills</h2>
        <ol>
          <li>ReactJS</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>Matlab</li>
          <li>VerilogHDL</li>
          <li>Python</li>
          <li>Tinkercad</li>
        </ol>
      </section>

      <section>
        <h2>Resume</h2>
        <a href="../Images/PAVAN S-1.pdf" target="PAVAN%20S-1.pdf">Download My Resume</a>
      </section>

      <section>
        <h2>Contact</h2>
        <p>Feel free to contact me at pavangowda@gmail.com</p>
      </section>
    </div>
  );
}

export default App;
