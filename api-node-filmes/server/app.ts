import * as express from "express";

import database from "./db";
import controller from "./controller";

class App {
  private controller: controller;
  private database: database;
  public app: express.Application;

  constructor() {
    this.app = express();
    this.middleware();
    this.database = new database();
    this.database.createConnection();
    this.controller = new controller();

    this.routes();
  }

  middleware() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(function (req, res, next) {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Methods", "GET,DELETE,POST,PUT");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization");
      next();
      });
  }

  routes() {
    this.app
      .route("/api/filmes/")
      .get((req, res) => this.controller.select(req, res));
    this.app
      .route("/api/filmes/:id")
      .get((req, res) => this.controller.selectOne(req, res));
    this.app
      .route("/api/filmes/:id")
      .delete((req, res) => this.controller.delete(req, res));
    this.app
      .route("/api/filmes/:id")
      .put((req, res) => this.controller.update(req, res));
    this.app
      .route("/api/filmes/")
      .post((req, res) => this.controller.insert(req, res));
  }
}

export default new App();
