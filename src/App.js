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
        <div>
          Ícones feitos por
          <a
            href="https://www.flaticon.com/br/autores/th-studio"
            title="th studio"
          >
            th studio
          </a>
          from
          <a
            href="https://www.flaticon.com/br/"
            title="Flaticon"
          >
            www.flaticon.com
          </a>
        </div>
      </div>
    );
  }
}

export default App;
