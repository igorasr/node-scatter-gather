import axios from "axios";
import fetch from "../../../shared/libs/httpclient.js";
import BaseController from "./BaseController.js";

class QuotesController extends BaseController {
  constructor({ service, validator = null }) {
    super({ service, validator });
  }

  static initialize(props) {
    const instance = new QuotesController(props);

    return instance;
  }

  async get(req, res) {
    try {
      const {query: { moeda }} = req;

      const response = await this.service.getAllQuote(moeda);

      return this.ok(res, {data: response});

    } catch (error) {
      return this.fail(res, error);
    }
    
  }
}

export default QuotesController;
