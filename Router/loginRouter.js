const express = require('express');
// const dotenv = require('dotenv');
// const mongoose = require('mongoose');
// const cookieParser = require('cookie-parser');
// const path = require('path');
const {getLogin} = require("../controller/loginController");
const decoratehtmlresponse = require("../middleware/common/decorateHtmlResponse");
const router = express.Router();

//login page
router.get("/",decoratehtmlresponse("Login"),getLogin);

module.exports = router;
