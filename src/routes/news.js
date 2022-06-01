const express = require("express");
const NewsRoutes = express.Router();
const axios = require("axios");

NewsRoutes.get("", async (req, res) => {
  try {
    const newsAPI = await axios.get(
      `https://css-tricks.com/wp-json/wp/v2/posts`
    );
    res.render("news", { articles: newsAPI.data });
    console.log(articles);
  } catch (err) {
    if (err.response) {
      res.render("news", { articles: null });

      console.log(err.response.data);
      console.log(err.response.status);
      console.log(err.response.headers);
    } else if (err.request) {
      res.render("news", { articles: null });

      console.log(err.requiest);
    } else {
      res.render("news", { articles: null });

      console.error("Error", err.message);
    }
  }
});

NewsRoutes.get("/:id", async (req, res) => {
  const articleID = req.params.id;

  try {
    const newsAPI = await axios.get(
      `https://css-tricks.com/wp-json/wp/v2/posts/${articleID}`
    );
    res.render("newsSingle", { article: newsAPI.data });
  } catch (err) {
    if (err.response) {
      res.render("newsSingle", { article: null });

      console.log(err.response.data);
      console.log(err.response.status);
      console.log(err.response.headers);
    } else if (err.request) {
      res.render("newsSingle", { article: null });

      console.log(err.requiest);
    } else {
      res.render("newsSingle", { article: null });

      console.error("newsSingle", err.message);
    }
  }
});

module.exports = NewsRoutes;
