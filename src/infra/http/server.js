import cors from "cors";
import httpCodes from "../../shared/enums/HttpCodes.js";
import bodyParser from "body-parser";

class Server {
    constructor(adapter) {
      this.server = adapter;
    }

    static initialize(adapter, routes, middlewares = "") {
      const server = new Server(adapter);
      server._configureMiddlewares(middlewares);
      server._configureRoutes(routes);
      return server.server;
    }

    _configureRoutes(routes) {
      const jsonParser = bodyParser.json();
      this.server.use(jsonParser,routes);

      this.server.use((req, res, next) => {
        res.status(httpCodes.NOT_FOUND).json({
          message:
            "Ohh you are lost, read the API documentation to find your way back home :)",
        });
      });
    }

    _configureMiddlewares(middlewares) {
      this._defaultMiddlewares();
    }

    _defaultMiddlewares() {
      this.server.use(cors());
    }
}

export default Server;
