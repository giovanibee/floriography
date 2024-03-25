import React from 'react';
import { OracleReader } from './components';
import pattern from './lib/images/bg_pattern.webp';
import './App.scss';

function App() {
  return (
    <div className="app">
      <div>
        <OracleReader />
      </div>
      <img
        src={pattern}
        className="bg-pattern"
        alt="decorative background pattern"
      />
    </div>
  );
}

export default App;
