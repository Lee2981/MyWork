
var express = require('express')
var router = express.Router();
const login_controller = require("../controller/loginController")

// 登录
router.post('/', login_controller.login);

module.exports = router;