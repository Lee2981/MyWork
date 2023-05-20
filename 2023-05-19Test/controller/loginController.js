const User = require("../models/User");
// const md5 = require('md5');

// JWT
const jwt = require('jsonwebtoken');
//密钥
require('dotenv').config();
const secretKey = process.env.MIMA;
//用户登录的方法

exports.login = (req, res, next) => {
    User.findOne({
        username: req.body.username,
        password: req.body.password
    }).then((user) => {
        if (user) {
            //生成token
            user = JSON.parse(JSON.stringify(user))
            const token = jwt.sign(user, secretKey, { expiresIn: '1h' });
            res.json({ token })
        } else {
            res.json({ msg: "用户不存在!" })
        }
    })
}