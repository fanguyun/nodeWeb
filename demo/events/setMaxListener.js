/**
 * Created by lenovo on 2016/4/29.
 */
/*
引入events事件模块，并实例化
**/
var EventEmitter = require('events').EventEmitter;
var ee = new EventEmitter();//实例化


/*
 EventEmitter.setMaxListeners (n)   给EventEmitter设置最大监听
 参数1： n 数字类型，最大监听数

 超过10个监听时，不设置EventEmitter的最大监听数会提示：
 (node) warning: possible EventEmitter memory leak detected. 11 listeners added.
 Use emitter.setMaxListeners() to increase limit.
 设计者认为侦听器太多，可能导致内存泄漏，所以存在这样一个警告
 */

ee.setMaxListeners(15);

/*注册10个监听函数*/
for(var i=0;i<10;i++){
    ee.on('some_events',function(foo,bar){
        console.log("第"+(i+1)+"个监听函数");
    })
}

/*触发监听*/
//ee.emit('some_events','jason','fan');