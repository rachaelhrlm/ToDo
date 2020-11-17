const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const corsOptions = {
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
  optionsSuccessStatus: 204,
};

const app = express();

const port = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors(corsOptions));

const taskRoutes = require("./src/routes/task.routes");
app.use("/tasks", taskRoutes);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
