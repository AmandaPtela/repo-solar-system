import React from 'react';
import PropTypes from 'prop-types';

class planetCard extends React.Component {
  render() {
    const { planetName, planetImage } = this.props;
    return (
      <div data-testid="planet-card">
        <img height="150px" src={ planetImage } alt={ `Planeta ${planetName}` } />
        <h4 id="nome-planeta">{ planetName }</h4>
      </div>
    );
  }
}
planetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
};
export default planetCard;
