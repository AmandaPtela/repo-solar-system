import React from 'react';
import './App.css';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';
import Title from './components/Title';
import Missions from './components/Missions';

class App extends React.Component {
  render() {
    return (
      <div data-testid="my-action" className="App">
        <Header />
        <SolarSystem />
        <Missions />
        <Title name="oopa" />
      </div>
    );
  }
}

export default App;
