import React from 'react';
import Title from './Title';
import '../App.css';

class solarSystem extends React.Component {
  render() {
    return (
      <div className="planetas" data-testid="solar-system">
        <Title headline="Planetas" />
      </div>
    );
  }
}
export default solarSystem;
