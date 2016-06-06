/**
 * Created by lenovo on 2016/5/3.
 */
var mysql = require('mysql');//引入mysql模块
//创建连接
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    port: '3306',
    database: 'nodesample',
});

connection.connect();//开始

var userGetSql = 'SELECT * FROM userinfo';
//查询
connection.query(userGetSql,function (err, result) {
    if(err){
        console.log('[SELECT ERROR] - ',err.message);
        return;
    }

    console.log('--------------------------SELECT----------------------------');
    console.log(result);
    console.log('--------------------------查询成功---------------------------\n\n');
});

connection.end();/*结束*/