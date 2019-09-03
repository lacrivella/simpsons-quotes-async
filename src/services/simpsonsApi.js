export const getQuote = () => {
  return fetch('https://thesimpsonsquoteapi.glitch.me/quotes')
    .then(res => {
      if(!res.ok) throw 'unable to get quote';
      return res.json();
    })
    
    //this isnt coming back right. [{quote: ....}]
    .then(json => json.map(quote => ({
      quote: quote.quote,
      characterName: quote.character,
      characterImage: quote.image
    })));
};
