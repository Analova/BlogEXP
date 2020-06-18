express = require("express");
const app = express();
const port = 3000;

// Routes
const routes = require("./routes.js");
//Static Files Folder
app.use(express.static("public"));
//Tamplate engine
app.set("view engine", "pug");

app.use("/", routes);

app.listen(port, () => console.log(`We are connected on port ${port}`));
