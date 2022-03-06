const express = require('express');
// const dotenv = require('dotenv');
// const mongoose = require('mongoose');
// const cookieParser = require('cookie-parser');
// const path = require('path');
const {getUsers} = require("../controller/usersController");
const decoratehtmlresponse = require("../middleware/common/decorateHtmlResponse");
const router = express.Router();

//login page
router.get("/",decoratehtmlresponse("User"),getUsers);

module.exports = router;