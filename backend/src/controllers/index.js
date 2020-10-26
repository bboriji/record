const express = require("express");
const router = express.Router();
/**
 * health check root path
 */
router.get("/", (req, res) => {
  res.send()
});

module.exports = router;
