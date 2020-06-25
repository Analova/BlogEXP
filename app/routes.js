const { response } = require("express");

express = require("express");
router = express.Router();
const DB = require("../database/connection");

router.get("/", (req, res) => {
  return res.render("../assets/views/homepage.pug");
});

router.get("/post/create", (req, res) => {
  return res.render("../assets/views/post/create.pug");
});

router.post("/post/create", (req, res) => {
  const post = req.body;
  DB.query(
    `INSERT INTO posts (title,description, image_url)
  VALUES ("${post.title}", "${post.description}","${post.image_url}")`,
    (error, result) => {
      if (error) {
        // console.log("error");
        // console.log(error);
        return res.redirect("/post/create");
      } else {
        return res.redirect("/");
      }
    }
  );

  // return res.json(post);
  // return res.render("../assets/views/post/create.pug");
});

router.get("/post/:id", (req, res) => {
  DB.query(
    `SELECT * FROM posts WHERE id = ${req.params.id} LIMIT 1 `,
    (error, result) => {
      if (error) {
        console.log("error");
        console.log(error);
        return res.redirect("/");
      } else {
        console.log("results:");
        console.log(result[0]);
        return res.render("../assets/views/post/show.pug", result[0]);
      }
    }
  );
});

router.get("/post/:id/edit", (req, res) => {
  DB.query(
    `SELECT * FROM posts WHERE id = ${req.params.id} LIMIT 1 `,
    (error, result) => {
      if (error) {
        console.log("error");
        console.log(error);
        return res.redirect("/");
      } else {
        console.log("results:");
        console.log(result[0]);
        return res.render("../assets/views/post/edit.pug", {
          id: req.params.id,
          title: result[0].title,
          description: result[0].description,
          image_url: result[0].image_url,
        });
      }
    }
  );
});

router.post("/post/:id/edit", (req, res) => {
  const post = req.body;
  DB.query(
    `UPDATE posts SET 
    title='${post.title}', 
    image_url='${post.image_url}',
    description='${post.description}' 
    WHERE id=${req.params.id}`,
    (error, result) => {
      if (error) {
        return res.redirect("/post/create");
      } else {
        return res.redirect(`/post/${req.params.id}`);
      }
    }
  );
});

module.exports = router;
