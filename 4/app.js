const express = require("express");
const homeRoute = require("./routes/home");
const userRoute = require("./routes/users");
const app = express();
app.listen("3030");
app.use(homeRoute);
app.use(userRoute);
app.use((req, res, next) => {
  res.send("<h1>Hi</h1>");
});
