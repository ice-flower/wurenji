<?php
$conn=mysqli_connect(
    "127.0.0.1",//主机
    "root",     //用户名
    "",         //密码
    "wurenji",  //数据库名
    3306        //端口
);
mysqli_query($conn,"set names utf8");
function sql_select($sql){
    global $conn;
    $result=mysqli_query($conn,$sql);
    return $rows=mysqli_fetch_all($result,MYSQLI_ASSOC);
}