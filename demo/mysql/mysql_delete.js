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

var  userDelSql = "DELETE FROM userinfo where id = '1'";
//删除
connection.query(userDelSql,function (err, result) {
    if(err){
        console.log('[DELETE ERROR] - ',err.message);
        return;
    }

    console.log('--------------------------DELETE----------------------------');
    console.log('DELETE affectedRows',result.affectedRows);
    console.log('--------------------------删除成功----------------------------npm\n\n');
});

connection.end();/*结束*/