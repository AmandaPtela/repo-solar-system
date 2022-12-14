import React from 'react';
import Title from './Title';
import '../App.css';
import PlanetCard from './PlanetCard';
import Planets from '../data/planets';

class solarSystem extends React.Component {
  render() {
    return (
      <div className="solar-system" data-testid="solar-system">
        <Title headline="Planetas" />
        <div className="div-planetas">
          {Planets.map((planet) => (
            <PlanetCard
              key={ planet.name }
              planetName={ planet.name }
              planetImage={ planet.image }
            />
          ))}
        </div>
      </div>
    );
  }
}
export default solarSystem;
