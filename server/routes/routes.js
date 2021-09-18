const express = require("express");
const router = express.Router();
const { send_emails } = require("../controllers/controllers");

router.post("/email", send_emails);
module.exports = router;
