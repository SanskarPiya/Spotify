const express = require("express");
const app = express();
const path = require("path");
const ejs = require("ejs");

const PORT = 3000;

app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/home", (req, res) => {
  res.render("homePage.ejs");
});

app.get("/login", (req, res) => {
  res.render("loginPage");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
