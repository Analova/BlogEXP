const mysql = require("mysql");

const DB = mysql.createConnection({
  host: "remotemysql.com",
  user: "yVx2woLkBw",
  password: "a9pdGQg74w",
  database: "yVx2woLkBw",
  multipleSatatements: true,
});

DB.connect((error) => {
  if (!error) {
    console.log("Connected To Database");
  } else {
    console.log("No Connection");
  }
});

module.exports = DB;
