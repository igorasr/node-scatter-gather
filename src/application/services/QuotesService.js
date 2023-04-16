import QuotesDTO from "./../../domain/DTOs/QuotesDTO.js";

class BestQuotesService {
  constructor({ domainService, repositories = [] }) {
    this.repositories = repositories;
    this.domainService = domainService;
  }

  async getAllQuote(tag) {
    const responses = [];

    for (const repositorie of this.repositories) {
      responses.push(repositorie.getQuotes(tag));
    }

    let quotes = await Promise.allSettled(responses);

    quotes = quotes.map((quote) => {
      if (quote.status == "fulfilled") return quote.value;
    });

    const bestQuote = this.domainService.execute(quotes);

    return new QuotesDTO(bestQuote, quotes);
  }
}

export default BestQuotesService;
