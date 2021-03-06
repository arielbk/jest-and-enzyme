import React from 'react';
import PropTypes from 'prop-types';

/**
 * Functional react component for congrats message
 * @function
 * @param {object} props - React props
 * @returns {JSX.Element} - Rendered component (or null if `success` prop is false)
 */
const Congrats = (props) => {
  if (props.success) {
    return (
      <div data-test="component-congrats" class="alert alert-success">
        <span data-test="congrats-message">
          Congratulations, you guessed the word!
        </span>
      </div>
    )
  } else {
    return (
      <div data-test="component-congrats" />
    )
  }
};

Congrats.propTypes = {
  success: PropTypes.bool.isRequired,
}

export default Congrats;