
const jwt = require('jsonwebtoken');
const Lyb = require("../models/Lyb");
//密钥
require('dotenv').config();
const secretKey = process.env.MIMA;
//获取列表
exports.lybList = (req, res, next) => {
    Lyb.find({}).then((data) => {
        res.json(data)
    })
    // let token = req.headers.authorization
    // 验证JWT令牌并解析用户信息
    // try {
    // const user = jwt.verify(token, secretKey);
    // let lyb = new Lyb();
    // lyb.find({}).then((res) => {
    //     console.log(res);
    //     alert(res)
    // })
    // res.json(user)
    // } catch (err) {
    //     console.error(`验证JWT令牌失败：${err.message}`);
    // }
}

//增加留言
exports.addlyb = (req, res, next) => {
    const newLyb = new Lyb({
        title: req.body.title,
        content: req.body.content,
        create_time: getNowDate(),
        author: req.body.author,
    })
    newLyb.save().then((lyb) => {
        res.json(lyb);
    }).catch((err) => {
        res.json(err);
    });
}

//删除留言
exports.dellyb = (req, res, next) => {
    Lyb.deleteOne({ _id: req.body.id }).then((lyb) => {
        res.json(lyb);
    }).catch((err) => {
        res.json(err);
    });
}

//获取当前时间
function getNowDate() {
    var date = new Date();
    var seperator1 = "-";
    var seperator2 = ":";
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    var currentdate =
        date.getFullYear() +
        seperator1 +
        month +
        seperator1 +
        strDate +
        " " +
        date.getHours() +
        seperator2 +
        date.getMinutes() +
        seperator2 +
        date.getSeconds();
    return currentdate;
}
