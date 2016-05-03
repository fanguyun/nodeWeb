/**
 * Created by lenovo on 2016/5/3.
 */
/*
* 一个nodejs文件就是一个模块
* 最总要的两个对象
* require:是从外部获取模块
* exports：是把模块从接口公开
* NodeJs开发者建议导出对象用module.exports,导出多个方法和变量用exports
*/
//模块引入
var counter = require('./module_custom_counter');
console.log("第一次调用[module_custom_counter]模块");
console.log("Module.id:"+counter.filename);

counter.setOutputVal(10);//设置计数从10开始
counter.setIncrement(10);//设置增量为10

counter.printNextCount();
counter.printNextCount();
counter.printNextCount();
counter.printNextCount();

//require多次调用同一模块不会重复加载
var counter = require('./module_custom_counter');
console.log("第二次调用[module_custom_counter]模块");

counter.printNextCount();