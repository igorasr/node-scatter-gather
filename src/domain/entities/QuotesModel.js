export class QuotesModel{
    constructor({ cotacao, moeda, service='' }){
        this.cotacao=cotacao;
        this.moeda=moeda;
        this.service=service;
    }

}