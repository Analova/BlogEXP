express = require("express");
const app = express();
const DB = require("../database/connection.js");
const bodyParser = require("body-parser");
const port = 3000;

// Using body parse for post request
app.use(bodyParser.urlencoded({ extanded: true }));
// Routes
const routes = require("./routes.js");
//Static Files Folder
app.use(express.static("public"));
//Tamplate engine
app.set("view engine", "pug");

app.use("/", routes);

app.listen(port, () => console.log(`We are connected on port ${port}`));
