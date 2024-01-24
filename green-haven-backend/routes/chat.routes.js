const router = require("express").Router();
const { postMessage } = require("../controllers/chat.controllers");

router.post("/", postMessage);


module.exports = router