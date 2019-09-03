import React from 'react';
import PropTypes from 'prop-types';

//might need to put quote character and image in sepereate div
function Quote({ quotes }) {
  return (
    <section>
      <p>{quotes}</p>
    </section>
  )
}

Quote.propTypes = {
  quotes: PropTypes.arrayOf(PropTypes.shape({
    quote: PropTypes.string.isRequired,
    characterName: PropTypes.string.isRequired,
    characterImage: PropTypes.string.isRequired
  })).isRequired,
}

export default Quote;

