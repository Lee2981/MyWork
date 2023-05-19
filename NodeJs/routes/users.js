var express = require('express');
var router = express.Router();
const fs = require('fs');

const { expressjwt: jwt } = require("express-jwt");
const secretKey = express().get('secretKey');
const { token } = require('morgan')
const app = require("../app");
//解析数据
const jsonwebtoken = require('jsonwebtoken');

// 查询
router.get('/', function (req, res, next) {
  let token = req.headers.authorization.substring(7)
  const decoded = jsonwebtoken.verify(token, secretKey);
  // const userId = decoded.userId;
  fs.readFile("./data/user.json", jwt({ secret: secretKey, algorithms: ["HS256"] }), function (err, data) {
    data = JSON.parse(data);
    let result = {
      code: 200,
      msg: 'success',
      data: data.dataList
    }
    res.send(JSON.stringify(result));
  });
});
//增加
router.post('/add', function (req, res, next) {
  fs.readFile("./data/user.json", (err, user) => {
    if (err) {
      console.log(err);
    }
    user = JSON.parse(user);
    let newUser = {
      id: ++user.auto_id,
      name: req.body.name,
      password: req.body.password
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
router.post('/upd', function (req, res, next) {
  fs.readFile("./data/user.json", (err, user) => {
    if (err) {
      console.log(err);
    }
    user = JSON.parse(user);
    let newUser = {
      id: req.body.id,
      name: req.body.name,
      password: req.body.password
    }
    user.dataList.forEach((item, index) => {
      if (item.id == newUser.id) {
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
router.delete('/del', function (req, res, next) {
  fs.readFile("./data/user.json", (err, user) => {
    if (err) {
      console.log(err);
    }
    user = JSON.parse(user);
    let Delid = req.body.id;
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
//查询单个
router.get('/get', function (req, res, next) {
  fs.readFile("./data/user.json", (err, user) => {
    if (err) {
      console.log(err);
    }
    user = JSON.parse(user);
    let updID = req.query.id;
    let updUser;
    user.dataList.forEach((item, index) => {
      if (item.id == updID) {
        updUser = user.dataList[index]
      }
    });
    let result = {
      code: 200,
      msg: 'success',
      data: updUser
    }
    res.send(JSON.stringify(result));
  });
});
module.exports = router;
