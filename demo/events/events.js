/**
 * Created by lenovo on 2016/4/27.
 */
/*
*调用event模块，获取event.eventemitter的对象
*/
var EventEmitter = require('events').EventEmitter;
var ee = new EventEmitter();

/*
*EventEmitter.on(event,listener)
* 参数1：event 字符串，事件名
* 参数2：回调函数
*/
ee.on('some_event',function(foo,bar){
    console.log("第一个监听事件，参数foo="+foo+",bar="+bar);
});

console.log("第一轮");
ee.emit('some_event','wilson','zhong');

console.log("第二轮");
ee.emit('some_event','wilson','Z');