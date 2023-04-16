import { QuotesModel } from "../../domain/entities/QuotesModel.js";
import fetch from "../../shared/libs/httpclient.js";

class ServiceB{
    constructor(url){
        this.url = url;
    }

    async getQuotes(tag){
        const {cotacao}  = await fetch('get', this.url+tag);
        
         return new QuotesModel({
             cotacao: parseFloat(cotacao.valor / cotacao.fator),
             moeda: cotacao.currency,
             service: 'Servico B'
         }); 
     }
}

export default ServiceB;