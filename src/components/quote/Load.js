import React from 'react';
import PropTypes from 'prop-types';
import styles from './Load.css';

function Load({ handleButton }) {
  return (
    <button onClick={handleButton} className={styles.Load}>Load a New Character</button>
  );
}

Load.propTypes = {
  handleButton: PropTypes.func.isRequired
}

export default Load;
