/**
 * Created by lenovo on 2016/4/27.
 */
/*
 *调用event模块，获取event.eventemitter的对象
 */
var EventEmitter = require('events').EventEmitter;
var ee = new EventEmitter();

/*
 *EventEmitter.on(event,listener)绑定监听函数
 * 参数1：event 字符串，事件名
 * 参数2：回调函数
 */
ee.on('some_events',function(foo,bar){
    console.log("第一个监听事件，参数foo="+foo+",bar="+bar);
})
/*
* EventEmitter.emit(event,[arg1],[arg2],[...])触发指定事件
* 参数1：event 字符串，事件名
* 参数2：可选参数，按顺序传入回调函数的参数
* 返回值：该事件是否有监听
*/
var isSuccess = ee.emit('some_events','wilson','1');
ee.on('some_events',function(foo,bar){
    console.log("第二个监听事件，参数foo="+foo+",bar="+bar);
});

ee.emit('some_events','zhong','2');
var isSuccess2 = ee.emit('other_events','wilson','3');
console.log(isSuccess);//true
console.log(isSuccess2);//false
