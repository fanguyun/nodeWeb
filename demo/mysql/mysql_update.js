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

var userModSql = 'UPDATE userinfo SET UserName = ?,UserPass = ? WHERE Id = ?';
var userModSql_Params = ['eason','50000',3];

//更新
connection.query(userModSql,userModSql_Params,function (err, result) {
    if(err){
        console.log('[UPDATE ERROR] - ',err.message);
        return;
    }
    console.log('--------------------------UPDATE----------------------------');
    console.log('UPDATE affectedRows',result);
    console.log('--------------------------更新成功-----------------------\n\n');
});

connection.end();/*结束*/