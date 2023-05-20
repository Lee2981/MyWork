var express = require('express');
var router = express.Router();
require('dotenv').config();
const secretKey = process.env.MIMA;
const { expressjwt: jwt } = require("express-jwt");


const lyb_controller = require("../controller/LybController")

router.get('/lyblist', lyb_controller.lybList)

router.post('/addlyb', lyb_controller.addlyb)

router.delete('/dellyb', lyb_controller.dellyb)

module.exports = router;
