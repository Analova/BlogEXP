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
    // Running Migraton of Tables
    DB.query("SELECT 1 FROM posts LIMIT 1", (error, results) => {
      if (error) {
        //Create Table
        console.log("Creating Table posts");
        DB.query(
          `CREATE TABLE posts(id INT UNSIGNED NOT NULL AUTO_INCREMENT
              PRIMARY KEY,
              title VARCHAR(60) NOT NULL,
              description MEDIUMTEXT NOT NULL,
              image_url MEDIUMTEXT NOT NULL)`,
          (error, results) => {
            if (error) {
              console.log("ERROR WITH CREATING TABLE");
              console.log(error);
            } else {
              console.log(" CREATED TABLE");
            }
          }
        );
      } else {
        console.log("Table posts Already Exist");
      }
    });
  } else {
    console.log("No Connection");
  }
});

module.exports = DB;
