// Require Express
const express = require("express");
const path = require("path");

const hbs = require("hbs");
// Express server handling requests and responses
const app = express();
// Make everything inside of public/ available

app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "hbs");
hbs.registerPartials(`${__dirname}/views/partials`);

app.get("/", (request, response) => {
  response.render("home", {
    title: "Home",
    navbar: true,
  });
});

app.get("/about", (request, response) => {
  response.render("about", {
    title: " About",
    navbar: true,
  });
});

app.get("/works", (request, response) => {
  response.render("works", {
    title: " Works",
    navbar: true,
  });
});

app.get("/photos", (request, response) => {
  response.render("photos", {
    title: " Photos",
    navbar: true,
  });
});

app.listen(3000, () => console.log("My first app listening on port 3000!"));
