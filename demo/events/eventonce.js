/**
 * Created by lenovo on 2016/4/27.
 */
/*
 *调用event模块，获取event.eventemitter的对象
 */
var EventEmitter = require('events').EventEmitter;
var ee = new EventEmitter();

/*
 *EventEmitter.once(event,listener)绑定监听函数,为事件注册一次监听，触发一次后移除监听
 * 参数1：event 字符串，事件名
 * 参数2：回调函数
 */
ee.once('some_events',function(foo,bar){
    console.log("第一个监听事件，参数foo="+foo+",bar="+bar);
})
/*
 * EventEmitter.emit(event,[arg1],[arg2],[...])触发指定事件
 * 参数1：event 字符串，事件名
 * 参数2：可选参数，按顺序传入回调函数的参数
 * 返回值：该事件是否有监听
 */
console.log("第一轮");
ee.emit('some_events','wilson','1');
console.log("第二轮");
var isSuccess = ee.emit('other_events','wilson','2');
console.log(isSuccess);//true
