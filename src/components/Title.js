import React from 'react';
import '../App.css';

class Title extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <h2 data-testid="solar-system">{ this.props.headline }</h2>
      </div>
    );
  }
}
export default Title;
