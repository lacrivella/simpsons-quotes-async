import React from 'react';
import PropTypes from 'prop-types';
import styles from './Quote.css';

function Quote({ quote, characterName, characterImage }) {
  return (
    <section className={styles.Quote}>
      <img src ={characterImage}></img>
      <h3>{characterName}</h3>
      <h4>{quote}</h4>
    </section>
  );
}

Quote.propTypes = {
  quote: PropTypes.string.isRequired,
  characterName: PropTypes.string.isRequired,
  characterImage: PropTypes.string.isRequired
};

export default Quote;

