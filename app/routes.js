const { response } = require("express");

express = require("express");
router = express.Router();
const DB = require("../database/connection");

router.get("/", (req, res) => {
  return res.render("../assets/views/homepage.pug");
});

router.get("/generic", (req, res) => {
  return res.render("../assets/views/generic.pug");
});

router.get("/post/create", (req, res) => {
  return res.render("../assets/views/post/create.pug");
});

router.post("/post/create", (req, res) => {
  const post = req.body;
  return res.json(post);
  return res.render("../assets/views/post/create.pug");
});

module.exports = router;
