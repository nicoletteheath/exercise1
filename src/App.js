import React, { useState } from 'react';
import './App.css';

function App() {
    const [value, setValue] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <p>
          My value is {value}
        </p>
        <button  onClick={() => {
            setValue(value + 1)
        }}>Increase</button>
        <button  onClick={() => {
            setValue(value - 1)
        }}>Decrease</button>
      </header>
    </div>
  );
}

export default App;
