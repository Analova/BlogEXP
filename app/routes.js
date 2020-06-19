express = require("express");
router = express.Router();

router.get("/", (req, res) => {
  return res.render("../assets/views/homepage.pug");
});

router.get("/generic", (req, res) => {
  return res.render("../assets/views/generic.pug");
});

module.exports = router;
