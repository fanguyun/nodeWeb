/**
 * Created by lenovo on 2016/4/27.
 */
/*
 *调用event模块，获取event.eventemitter的对象
 */
var EventEmitter = require('events').EventEmitter;
var ee = new EventEmitter();//实例化

var listenter = function(foo,bar){
    console.log("第一个监听事件，参数foo="+foo+",bar="+bar);
}
var listenter2 = function(foo,bar){
    console.log("第二个监听事件，参数foo="+foo+",bar="+bar);
}
var listenter3 = function(foo,bar){
    console.log("第三个监听事件，参数foo="+foo+",bar="+bar);
}

//注册监听
ee.on("some_events",listenter);
ee.on("some_events",listenter2);
ee.on("some_events",listenter3);

/*
 EventEmitter.removeListener(event, listener)  移除指定事件的监听器
 注意：该监听器必须是注册过的
 PS：上一个例子之后以会失败，很大原因就是忽略了监听器，理所当然的认为传个事件名就OK了，所以就悲剧了!
 */
//移除监听
ee.removeListener("some_events",listenter);
ee.removeListener("some_events",listenter3);

//触发监听
ee.emit('some_events','Jason','fan');