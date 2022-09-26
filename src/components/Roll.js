import React from 'react';
import '../App.css';
import seta from '../images/seta-para-baixo(1).png';

class Roll extends React.Component {
  render() {
    return (
      <img src={ seta } className="seta" alt="seta-para-baixo" height="100px" />
    );
  }
}

export default Roll;
