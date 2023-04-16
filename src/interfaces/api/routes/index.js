import { Router } from 'express';
const baseRoutes = Router();
const v1 = Router();


import QuotesRoute from './QuotesRoute.js';
baseRoutes.use(QuotesRoute);


v1.use("/api/v1", baseRoutes)
export default v1;