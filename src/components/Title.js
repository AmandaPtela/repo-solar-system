import PropTypes from 'prop-types';
import React from 'react';
import '../App.css';

class Title extends React.Component {
  render() {
    const { headline } = this.props;
    return (
      <div>
        <h2>{ headline }</h2>
      </div>
    );
  }
}
Title.protoTypes = {
  headline: PropTypes.string.isRequired,
};
export default Title;
