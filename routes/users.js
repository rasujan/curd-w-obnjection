var express = require("express");
var router = express.Router();
const User = require("../db/models/user");

/* GET users listing. */
router.get("/", async (req, res, next) => {
  try {
    const users = await User.query().findById(1).withGraphFetched("Channel");
    res.json(users);
  } catch {
    (err) => {
      console.error(err.message);
      res.status(500).send("Server Error");
    };
  }
});

module.exports = router;
