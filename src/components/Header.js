import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import Roll from './Roll';

class Header extends React.Component {
  state = {
    clicked: 'false',
  }

  render() {
    const clique = () => {
      this.setState({ clicked: 'true' });
    };

    const { clicked } = this.state;
    return (
      <header data-testid="my-action">
        <div className="big-box-buttons">
          <div className="area-linha"><hr className="linha1" /></div>
          <h1 className="header-title" data-testid="my-action">Sistema Solar</h1>
          <div className="area-linha"><hr className="linha2" /></div>
          <div className="area-linha"><hr className="linha3" /></div>
          <div className="box-buttons">
            <Link to="planets">
              <button type="button" onClick={ clique } className="nav">Planets</button>
            </Link>
            <Link to="missions">
              <button type="button" onClick={ clique } className="nav">Missions</button>
            </Link>
          </div>
          { clicked === 'true'
            ? (
              <div className="area-seta">
                <Roll />
              </div>
            ) : ''}
        </div>
      </header>
    );
  }
}
export default Header;
