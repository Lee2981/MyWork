var express = require('express');
var router = express.Router();
const fs = require('fs');

// 查询
router.get('/', function (req, res, next) {
  fs.readFile("./data/user.json", function (err, data) {
    data = JSON.parse(data);
    let result = {
      code: 200,
      msg: 'success',
      data: data.dataList
    }
    res.send(JSON.stringify(result));
  });
});
// 增加
router.get('/add', function (req, res, next) {
  fs.readFile("./data/user.json", (err, user) => {
    if (err) {
      console.log(err);
    }
    user = JSON.parse(user);
    let newUser = {
      id: ++user.auto_id,
      name: '小黑子',
      password: '123456'
    }
    user.dataList.push(newUser);
    fs.writeFile("./data/user.json", JSON.stringify(user), (err) => {
      if (err) {
        console.log(err);
      }
      let result = {
        code: 200,
        msg: 'success',
        data: newUser
      }
      res.send(JSON.stringify(result));
    });
  });
});
//修改
router.get('/update', function (req, res, next) {
  fs.readFile("./data/user.json", (err, user) => {
    if (err) {
      console.log(err);
    }
    user = JSON.parse(user);
    let Updid = 4;
    let newUser = {
      id: Updid,
      name: '小黑子122',
      password: '123456'
    }
    user.dataList.forEach((item, index) => {
      if (item.id == Updid) {
        user.dataList[index] = newUser
      }
    });
    fs.writeFile("./data/user.json", JSON.stringify(user), (err) => {
      if (err) {
        console.log(err);
      }
      let result = {
        code: 200,
        msg: 'success',
        data: user
      }
      res.send(JSON.stringify(result));
    });
  })
});
//删除
router.get('/delete', function (req, res, next) {
  fs.readFile("./data/user.json", (err, user) => {
    if (err) {
      console.log(err);
    }
    user = JSON.parse(user);
    let Delid = 2;
    user.dataList.forEach((item, index) => {
      if (item.id == Delid) {
        user.dataList.splice(index, 1);
      }
    });
    fs.writeFile("./data/user.json", JSON.stringify(user), (err) => {
      if (err) {
        console.log(err);
      }
      let result = {
        code: 200,
        msg: 'success',
        data: user
      }
      res.send(JSON.stringify(result));
    });
  })
});
module.exports = router;
