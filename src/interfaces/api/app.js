class App {
  constructor({ server, config = {} }) {
    this.server = server;
    this.config = config;
    this.http = null;
  }

  static initialize(props) {
    const app = new App(props);
    return app;
  }

  up() {
    this._graceFullShutDown();
    this.http = this.server.listen(this.config.port, () => {
      process.emit(
        "api_running",
        `Server is running on port ${this.config.port}`
      );
    });
  }

  _shutdown() {
     this.http.close(() => {
      console.log("Http server closed.");
    });
  }

  _graceFullShutDown() {
    const killerSignals = ["SIGTERM", "SIGINT", "SIGQUIT", "SIGHUP"];

    killerSignals.forEach((signal) => {
      process.on(signal, () => {
        console.log(`${signal} signal received`);
        this._shutdown();
      });
    });
  }
}

export default App;
