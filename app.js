const express = require("express");
const path = require("path");

const app = express();
const port = 8000;

app.use("/static", express.static("static"));

app.set("view engine", "pug"); // Set the template engine as pug
app.set("views", path.join(__dirname, "views")); // Set the views directory

app.get("/", (req, res) => {
  para = {};
  res.status(200).render("home.pug", para);
});
app.get("/about", (req, res) => {
  para = {};
  res.status(200).render("about.pug", para);
});
app.get("/resume", (req, res) => {
  para = {};
  res.status(200).render("resume.pug", para);
});
app.get("/portfolio", (req, res) => {
  para = {};
  res.status(200).render("portfolio.pug", para);
});
app.get("/blog", (req, res) => {
  para = {};
  res.status(200).render("blog.pug", para);
});
app.get("/contact", (req, res) => {
  para = {};
  res.status(200).render("contact.pug", para);
});

app.listen(port, () => {
  console.log(`server start on http://localhost:${port}`);
});
