const express = require('express');
// const dotenv = require('dotenv');
// const mongoose = require('mongoose');
// const cookieParser = require('cookie-parser');
// const path = require('path');
const {getInbox} = require("../controller/inboxController");
const decoratehtmlresponse = require("../middleware/common/decorateHtmlResponse");
const router = express.Router();

//inbox page
router.get("/",decoratehtmlresponse("Inbox"), getInbox);

module.exports = router;