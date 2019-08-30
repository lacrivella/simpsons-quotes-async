import { FETCH_QUOTES, FETCH_QUOTES_LOADING } from '../actions/simpsonsActions';

const initialState = {
  quotes: {
    quote: '',
    characterName: '',
    characterImage: ''
  },
  loading: false,
  error: null
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_QUOTES_LOADING:
      return { ...state, loading: true };
    case FETCH_QUOTES:
      return { ...state, loading: false, error: null, quotes: action.payload };
    default:
      return state;
  }
}
