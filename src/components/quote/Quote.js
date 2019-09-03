import React from 'react';
import PropTypes from 'prop-types';

function Quote({ quote, characterName, characterImage }) {
  return (
    <section>
      <img src ={characterImage}></img>
      <h3>{characterName}</h3>
      <h3>{quote}</h3>
    </section>
  );
}

Quote.propTypes = {
  quote: PropTypes.string.isRequired,
  characterName: PropTypes.string.isRequired,
  characterImage: PropTypes.string.isRequired
};

export default Quote;

