import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';

class Title extends React.Component {
  render() {
    const { headline } = this.props;
    return (
      <div>
        <h2 className="titulo-planetas">{ headline }</h2>
      </div>
    );
  }
}
Title.propTypes = {
  headline: PropTypes.string.isRequired,
};
export default Title;
