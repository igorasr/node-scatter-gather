import { once, EventEmitter } from  'node:events';
import { QuotesModel } from '../../domain/entities/QuotesModel.js';

import fetch from "../../shared/libs/httpclient.js";
import { timeout } from '../../shared/helpers/timeout.js';

class ServiceC {
  constructor(url) {
    this.url = url;

    this.events = new EventEmitter();
  }

  async getQuotes(tag) {
   const  response =  await fetch("POST", this.url, {
      tipo: tag,
      callback: "http://host.docker.internal:3000/api/v1/quotes/webhook",
    });

    let [json] = await Promise.race([timeout(5), once(this.events, `received-webhook:${response.cid}`)]); 


    return new QuotesModel({
      cotacao: json.v / json.f,
      moeda: json.t,
      service: 'ServiceC'
    });
  }

}

export default ServiceC;