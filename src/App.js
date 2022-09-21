import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';
import Missions from './components/Missions';

class App extends React.Component {
  render() {
    return (
      <div data-testid="my-action" className="App">
        <Header />
        <Routes>
          <Route path="planets" element={ <SolarSystem /> } />
          <Route path="missions" element={ <Missions /> } />
        </Routes>
      </div>
    );
  }
}

export default App;
