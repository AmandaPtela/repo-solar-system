import React from 'react';
import Title from './Title';
import '../App.css';
import PlanetCard from './PlanetCard';
import Planets from '../data/planets';

class solarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system" className="div-planetas">
        <Title headline="Planetas" />
        {Planets.map((planet) => (
          <PlanetCard
            key={ planet.name }
            planetName={ planet.name }
            planetImage={ planet.image }
          />
        ))}
      </div>
    );
  }
}
export default solarSystem;
