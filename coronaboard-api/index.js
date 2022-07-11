const express = require("express");
const bodyParser = require("body-parser");
const { sequelize } = require("./database");

// Controller
const globalStatController = require("./controller/global-stat.controller");
const keyValueController = require("./controller/key-value.controller");

async function launchServer() {
  const app = express();
  app.use(bodyParser.json());

  app.get("/", (req, res) => {
    res.json({
      message: "Hello CoronaBoard!",
    });
  });

  app.get("/key-value/:key", keyValueController.get);
  app.post("/key-value", keyValueController.insertOrUpdate);
  app.delete("/key-value/:key", keyValueController.remove);

  app.get("/global-stats", globalStatController.getAll);
  app.post("/global-stats", globalStatController.insertOrUpdate);
  app.delete("/global-stats", globalStatController.remove);

  try {
    await sequelize.sync();
    console.log("Database is ready!");
  } catch (error) {
    console.log("Unable to connect to the database:", error);
    process.exit(1);
  }

  const port = process.env.PORT || 8080;
  app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
  });
}

launchServer();
