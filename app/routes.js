express = require("express");
router = express.Router();

router.get("/", (req, res) => {
  return res.render("../assets/views/homepage.pug");
});

router.get("/generic", (req, res) => {
  return res.render("../assets/views/generic.pug");
});

router.get("/post/create", (req, res) => {
  return res.render("../assets/views/post/create.pug");
});

module.exports = router;
