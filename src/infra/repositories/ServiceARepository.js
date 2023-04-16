import { QuotesModel } from "../../domain/entities/QuotesModel.js";
import fetch from "../../shared/libs/httpclient.js";

class ServiceA{
    constructor(url){
        this.url = url;
    }

   async getQuotes(tag){
       const response  = await fetch('get', this.url+tag);
       
        return new QuotesModel({
            cotacao: parseFloat(response.cotacao),
            moeda: response.moeda,
            service: 'Servico A'
        });

    }
}

export default ServiceA;