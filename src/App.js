import logo from './logo.svg';
import './App.css';

function App() {
  return (
<div>
      <div><Header /></div>

      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Че реально? <code>src/App.js</code> and save to reload.
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

</div>
  );
}

function Header() {
  return (
      <div className="HeaderFunc">
        <a href='#s' className="HeaderFuncLink">Home</a>
          <a href='#s' className="HeaderFuncLink">Feed</a>
          <a href='#s' className="HeaderFuncLink">Messages</a>
      </div>
  );
}

export default App;
