/**
 * Created by lenovo on 2016/4/29.
 */
/*
*引入event对象，并实例化
**/
var EventEmitter = require('events').EventEmitter;
var ee = new EventEmitter();//实例化

/*注册监听*/
var listener = function(foo,bar){
    console.log("第一个监听函数，参数foo="+foo+",bar="+bar);
}
var listener2 = function(foo,bar){
    console.log("第二个监听函数，参数foo="+foo+",bar="+bar);
}
ee.on("some_events",listener);
ee.on("some_events",listener2);

/*触发监听*/
//ee.emit("smoe_events","foo","fan");
ee.on("other_events",function(foo,bar){
    console.log("其他监听事件，参数foo="+foo+",bar="+bar);
})

/*
*EventEmitter.listeners('events');//返回指定事件的监听数组,必须带参数
* 参数：event，字符串，事件名
*
*/
var listenerEventArr = ee.listeners('some_events');
console.log(listenerEventArr.length);
for(var i=0;i<listenerEventArr.length;i++){
    console.log(i+"--"+listenerEventArr[i]);
}
