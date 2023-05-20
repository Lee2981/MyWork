
const User = require("../models/User");


//注册
exports.add = (req, res, next) => {
    User.findOne({
        username: req.body.username
    }).then((user) => {
        if (user) {
            res.json({ msg: "用户名已经存在!" })
        } else {
            let newUser = new User({
                username: req.body.username,
                password: req.body.password,
                sex: req.body.sex,
                create_time: getNowDate(),
            })
            newUser.save().then((user) => {
                res.json(user)
            }).catch(err => {
                res.json(err)
            })
        }
    })
};
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
    var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
        + " " + date.getHours() + seperator2 + date.getMinutes()
        + seperator2 + date.getSeconds();
    return currentdate;
}
