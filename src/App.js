import React from 'react';
import './App.css';
import Header from './components/Header.jsx'

const textJSX = 'Hello, JSX';
class App extends React.Component {
  render() {
    return (
      <div data-testid="my-action" className="App">
        <Header />
      </div>
    );
  }
}

export default App;
