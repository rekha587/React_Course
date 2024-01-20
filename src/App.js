import logo from './logo.svg';
import './App.css';
import { useState } from "react";


const content = [
  [
    "Hello welcome", "have fun", "HIIIIIIIIIIIIII"
  ],
  [
    "Hi Hello",
    "React is fun",
  ],
  [
    "Vanilla java script library",
    "reat is a java script library"
  ],
  [
    "React embraces declartive programming"
  ]
]

function App() {
  const [activeContentIndex, setActiveContentIndex] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div id="tabs">
          <menu>
            <button className={activeContentIndex === 0 ? "active" : ""}
              onClick={() => setActiveContentIndex(0)}
            >
              Why React?
            </button>

            <button className={activeContentIndex === 1 ? "active" : ""}
              onClick={() => setActiveContentIndex(1)}
            >
              Core Features
            </button>
            <button className={activeContentIndex === 2 ? "active" : ""}
              onClick={() => setActiveContentIndex(2)}
            >
              Related Resoruces
            </button>
            <button className={activeContentIndex === 3 ? "active" : ""}
              onClick={() => setActiveContentIndex(3)}
            >
              React Facts
            </button>
          </menu>

        </div>
        <div id="tabContents">
          <ul>
            {content[activeContentIndex].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </header>

    </div>
  );
}

export default App;
