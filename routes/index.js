var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //页面数据绑定
  res.render('index', { title: 'Node+Express+Bootstrap应用' , main : 'My node' });
  $("#topMenu").children("li").removeClass("active");
  $("#topMenu").children("li").eq(0).addClass("active");
});

module.exports = router;
