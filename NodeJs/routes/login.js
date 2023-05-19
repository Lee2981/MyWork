const { log } = require('console');
var express = require('express')
var router = express.Router();
const fs = require('fs')

// JWT
const jwt = require('jsonwebtoken');
const secretKey = process.env.SECRETKEY;
/* GET home page. */

router.post('/', function (req, res, next) {
    console.log(req.body);
    fs.readFile("./data/user.json", function (err, data) {
        let user = JSON.parse(data);
        let index = user.dataList.findIndex((item, index) => {
            return item.name == req.body.username && item.password == req.body.password
        });
        if (index > -1) {
            //正确
            const token = jwt.sign(user.dataList[index], secretKey, { expiresIn: '1h' });
            res.json({ token })
        } else {
            //错误
            res.json({ code: 401, msg: "用户名错或密码错误" })
        }
    })
});

module.exports = router;