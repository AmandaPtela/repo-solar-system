import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

class Header extends React.Component {
  render() {
    return (
      <header data-testid="my-action">
        <div className="area-linha"><hr className="linha1" /></div>
        <h1 className="header-title" data-testid="my-action">Sistema Solar</h1>
        <div className="area-linha"><hr className="linha2" /></div>
        <div className="area-linha"><hr className="linha3" /></div>
        <div className="box-buttons">
          <Link to="planets" className="nav">Planets</Link>
          <Link to="missions" className="nav">Missions</Link>
        </div>
      </header>
    );
  }
}
export default Header;
