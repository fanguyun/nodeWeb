var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  //页面数据绑定
  res.render('contact', { message: 'contact页面33333' });
  //消息发送
  //res.send('respond with a resource');
});

module.exports = router;
