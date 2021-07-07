import React from 'react';
import './App.css';
import Sections from './components/sections/Sections';

import { Header } from './components/header/Header';


function App() {
  return (
    <div className="App">
      <Header/>
      <Sections/>
    </div>
  );
}

export default App;
