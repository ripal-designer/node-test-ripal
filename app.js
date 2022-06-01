const express = require("express");
const { required } = require("nodemon/lib/config");
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require("body-parser");

//static files
app.use(express.static("public"));
app.use("/css", express.static(__dirname + "public/css"));
app.use("/img", express.static(__dirname + "public/img"));
app.use("/js", express.static(__dirname + "public/js"));

//Templteting engine
app.set("views", "./src/views/");
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
//Routes

const NewsRoutes = require("./src/routes/news");
app.use("/", NewsRoutes);
app.use("/article", NewsRoutes);

//listen port
app.listen(port, () => console.log(`Listening on port ${port}`));
