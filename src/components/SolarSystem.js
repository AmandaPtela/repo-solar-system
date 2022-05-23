import React from 'react';
import Title from './Title';
import '../App.css';
import PlanetCard from './PlanetCard';
import Planets from '../data/planets';

class solarSystem extends React.Component {
  render() {
    return (
      <div className="div-planetas">
        <p><Title /></p>
        {Planets.map((item) => (
          <PlanetCard
            key={ item.name }
            planetName={ item.name }
            planetImage={ item.image }
          />
        ))}
      </div>
    );
  }
}
export default solarSystem;
