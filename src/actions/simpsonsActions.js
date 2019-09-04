import { getQuote } from '../services/simpsonsApi';

export const FETCH_QUOTES = 'FETCH_QUOTES';
export const FETCH_QUOTES_LOADING = 'FETCH_QUOTES_LOADING';

export const fetchQuotes = () => ({
  type: FETCH_QUOTES,
  payload: getQuote(),
  pendingType: FETCH_QUOTES_LOADING
});
