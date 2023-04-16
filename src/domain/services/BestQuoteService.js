class BestQuoteService {

  execute(quotes = []) {

    return quotes.reduce((bestQuote, currentQuote, index, array) => {
      return array[index].cotacao < bestQuote.cotacao
        ? currentQuote
        : bestQuote;
        
    });
  }

}

export default BestQuoteService;
