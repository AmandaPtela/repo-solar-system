import React from 'react';
import './App.css';
import Header from './components/Header.jsx'
import SolarSystem from './components/SolarSystem'

const textJSX = 'Hello, JSX';
class App extends React.Component {
  render() {
    return (
      <div data-testid="my-action" className="App">
        <Header />
        <SolarSystem />
      </div>
    );
  }
}

export default App;
