import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';

class Title extends React.Component {
  render() {
    const { headline } = this.props;
    return (
      <div data-testid="solar-system">
        <h2 data-testid="solar-system">{ headline }</h2>
      </div>
    );
  }
}
Title.propTypes = {
  headline: PropTypes.string.isRequired,
};
export default Title;
