express = require("express");
router = express.Router();

router.get("/", (req, res) => {
  return res.render("../assets/views/homepage.pug");
});

router.get("/pug", (req, res) => {
  return res.render("../assets/views/testing.pug", {
    username: "skyscaner",
    fname: "Billy",
    lname: "Lorenz",
    loggedIn: true,
    friends: ["Jane", "Billy", "Laura", "Jonny"],
  });
});

router.get("/about/:username/:state", function (req, res) {
  const user = req.params;
  const query = req.query;
  return res.send(`
  <h1>User: ${user.username}</h1>
  <h1>User: ${user.state}</h1>
  <h1>Low: ${query.low}</h1>
  <h1>Heigh: ${query.high}</h1>`);
});

module.exports = router;
