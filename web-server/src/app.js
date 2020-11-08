const path = require("path");
const express = require("express");
const hbs = require("hbs");
const forecast = require("./utils/forecast");
const geocode = require("./utils/geocode");

const app = express();
const port = process.env.PORT || 3000;

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
    name: "Katoni",
  });
});

app.get("/weather", (req, res) => {
  if (!req.query.address) {
    return res.send({
      error: "provide an address",
    });
  }
  geocode(req.query.address, (error, { lat, lon, location } = {}) => {
    if (error) {
      return res.send({ error });
    }
    forecast(lat, lon, (error, forecastData) => {
      if (error) {
        return res.send({ error });
      }
      res.send({
        forecast: forecastData,
        location,
        address: req.query.address,
      });
    });
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About the app",
    name: "Katoni",
  });
});

// 404:
app.get("*", (req, res) => {
  res.render("404", {
    title: "404",
    errorMassage: "404 this is not a page, Katoni",
  });
});

app.listen(port, () => {
  console.log(`server started on ${port}`);
});
