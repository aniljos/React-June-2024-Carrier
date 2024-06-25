import React from 'react';
import logo from './logo.svg';
import './App.css';
import Message from './components/Message';
import Counter from './components/Counter';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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
      <main>
        {/* <Message text="Hello React" color="blue"/>
        <Message text="Welcome to JSX"/> */}
        {/* <Counter initValue={5}/>	
        <Counter initValue={10}/>	 */}
        <Login/>
      </main>
    </div>
  );
}

export default App;
