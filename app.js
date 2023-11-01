const express = require("express");
const path = require("path");
const pug = require("pug");
const fs = require("fs");

const app = express();
const port = 8000;

app.use("/static", express.static("static"));

app.set("views", path.join(__dirname, "views")); // Set the views directory
app.set("view engine", "pug"); // Set the template engine as pug

app.get("/", (req, res) => {
  const html = pug.renderFile("views/home.pug"); // Replace 'index.pug' with your actual Pug file
  fs.writeFileSync("public/home.html", html); // Save the rendered HTML to a 'public' directory
  res.send(html);
});

app.get("/about", (req, res) => {
  const html = pug.renderFile("views/about.pug"); // Replace 'index.pug' with your actual Pug file
  fs.writeFileSync("public/about.html", html); // Save the rendered HTML to a 'public' directory
  res.send(html);
});

app.get("/resume", (req, res) => {
  const html = pug.renderFile("views/resume.pug"); // Replace 'index.pug' with your actual Pug file
  fs.writeFileSync("public/resume.html", html); // Save the rendered HTML to a 'public' directory
  res.send(html);
});

app.get("/portfolio", (req, res) => {
  const html = pug.renderFile("views/portfolio.pug"); // Replace 'index.pug' with your actual Pug file
  fs.writeFileSync("public/portfolio.html", html); // Save the rendered HTML to a 'public' directory
  res.send(html);
});

app.get("/blog", (req, res) => {
  const html = pug.renderFile("views/blog.pug"); // Replace 'index.pug' with your actual Pug file
  fs.writeFileSync("public/blog.html", html); // Save the rendered HTML to a 'public' directory
  res.send(html);
});

app.get("/contact", (req, res) => {
  const html = pug.renderFile("views/contact.pug"); // Replace 'index.pug' with your actual Pug file
  fs.writeFileSync("public/contact.html", html); // Save the rendered HTML to a 'public' directory
  res.send(html);
});

app.get("*", (req, res) => {
  const html = pug.renderFile("views/404.pug"); // Replace 'index.pug' with your actual Pug file
  fs.writeFileSync("public/404.html", html); // Save the rendered HTML to a 'public' directory
  res.send(html);
});

app.listen(port, () => {
  console.log(`server start on http://localhost:${port}`);
});
