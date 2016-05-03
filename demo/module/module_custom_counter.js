/**
 * Created by lenovo on 2016/5/3.
 */
/*
* 创建自定义模块，计时器
 */
var outputVal = 0;//输出量
var incremenr = 1;//增量

/*设置输出值*/
function setOutputVal(val){
    outputVal = val;
}

/*设置增量*/
function setIncrement(incremenrVal){
    incremenr = incremenrVal;
}

/*输出*/
function printNextCount(){
    outputVal += incremenr;
    console.log(outputVal);
}
function printOutputVal(){
    console.log(outputVal);
}

exports.setOutputVal = setOutputVal;
exports.setIncrement = setIncrement;

module.exports.printNextCount = printNextCount;