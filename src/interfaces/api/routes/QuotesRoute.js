import {Router} from "express";
import QuotesController from "../controllers/QuotesController.js";
import QuotesService from "../../../application/services/QuotesService.js";
import ServiceA from "../../../infra/repositories/ServiceARepository.js";
import ServiceB from "../../../infra/repositories/ServiceBRepository.js";
import ServiceC from "../../../infra/repositories/ServioceCRepository.js";
import BestQuoteService from "../../../domain/services/BestQuoteService.js";


const URL_SERVICEA = 'http://localhost:8080/servico-a/cotacao?moeda=';
const URL_SERVICEB = 'http://localhost:8080/servico-b/cotacao?curr=';
const URL_SERVICEC = 'http://localhost:8080/servico-c/cotacao';

const QuotesRouter = Router();

const repositories = [  
  new ServiceA(URL_SERVICEA),
  new ServiceB(URL_SERVICEB),
  new ServiceC(URL_SERVICEC)
]

const controller = new QuotesController({
  service: new QuotesService({
    domainService: new BestQuoteService,
    repositories: repositories
  }),
});

QuotesRouter.get('/quotes', controller.get.bind(controller));

QuotesRouter.post('/quotes/webhook',(req, res)=>{
    const {body } = req;
    
    repositories[2].events.emit(`received-webhook:${body.cid}`, body)
  
    res.status(200).json({status:'ok'})
});

export default QuotesRouter;