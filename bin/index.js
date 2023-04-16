import App from "../src/interfaces/api/app.js";
import Server from "../src/infra/http/server.js";
import routes from "../src/interfaces/api/routes/index.js";
import ExpressAdapter from "../src/infra/adapters/ExpressAdapter.js";


const httpServer = Server.initialize(new ExpressAdapter, routes);

const app = App.initialize({
    server: httpServer,
    config: {
        port: 3000
    }
});

app.up();

process.once('api_running', (msg)=>{
    console.log(msg)
})