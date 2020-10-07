const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const db  = require("./config/database");

db.sequelize
  .authenticate()
  .then(() => console.log("DB Conectada"))
  .catch((error) => console.log(error));

const app = express();

app.use(bodyParser.json());

app.use(cors());


const PORT = process.env.PORT || 3500;

app.listen(PORT, () => {
  console.log(`server running on ${PORT}`);
});