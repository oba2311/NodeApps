const path = require("path");
const express = require("express");
const hbs = require("hbs");

const app = express();

// define paths for express config:
const publicPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partials = path.join(__dirname, "../templates/partials");

// use handlebars engine for dynamic pages:
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partials);

// setup statis directory to serve:
app.use(express.static(publicPath));

app.get("", (req, res) => {
  res.render("index", {
    title: "Weather App",
    name: "Shreyas",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About the app",
    name: "dude",
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    title: "Andrew good night",
    name: "Shreyas",
  });
});

// 404:
app.get("*", (req, res) => {
  res.send("not a page");
});

app.listen(3000, () => {
  console.log("server started on 3000");
});
