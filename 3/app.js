const express = require("express");
const app = express();
const userRoutes = require("./routes/users");
const indexRouter = require("./routes/index");
const path = require("path");
app.use(express.static(path.join(__dirname, "public")));
app.use(userRoutes);
app.use(indexRouter);
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "error.html"));
});
app.listen(3000);
