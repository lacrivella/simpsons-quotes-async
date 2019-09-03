import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Quote from '../../components/quote/Quote';
import { fetchQuotes } from '../../actions/simpsonsActions';
import { 
  getQuote,
  getCharacterName,
  getCharacterImage,
  getLoading 
} from '../../selectors/simpsonsSelector';

class SimpsonsQuote extends Component {
  static propTypes = {
    fetch: PropTypes.func.isRequired,
    quotes: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    characterName: PropTypes.string.isRequired,
    characterImage: PropTypes.string.isRequired,
    error: PropTypes.object
  }

  componentDidMount() {
    this.props.fetch();
  }

  render() {
    const { quotes, loading } = this.props;
    if(this.props.loading) return <h1>LOADING</h1>;

    return <Quote quotes={quotes} />;
  }
}

const mapStateToProps = state => ({
  quotes: getQuote(state),
  characterName: getCharacterName(state),
  characterImage: getCharacterImage(state),
  loading: getLoading(state)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(fetchQuotes());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SimpsonsQuote);
