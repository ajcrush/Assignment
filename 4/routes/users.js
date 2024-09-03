const express = require("express");
const router = express.Router();
router.use("/users", (req, res, next) => {
  res.send("<h1>Users</h1>");
});
module.exports = router;
