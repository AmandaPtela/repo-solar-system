import React from 'react';
import '../App.css';

class Title extends React.Component {
  render() {
    return (
      <div>
        <h2>{ this.props.headline }</h2>
      </div>
    );
  }
}
export default Title;
