$(".home_page").click(e=>{
    var $target=$(e.target);
    var $ul=$(".home_page ul");
    /*
    * 如果 .home_page 中的内容为"首页"
    *   那么内容改成"关闭"
    *   否则内容改成"首页"
    *
    * */
   $target.text()=="首页"?$target.text("关闭"):$target.text("首页");
    $ul.fadeToggle(500).toggleClass("show");
});

//首页数据header_nav.php
$(function(){
    $.ajax({
        url:"data/header_nav.php",
        type:"get"
    }).then(text=>{
        //console.log(text);//string
        var data=JSON.parse(text),//obj
            ul=$(".header_nav"),
            html="";
        for(var i=0;i<data.length;i++){
            html+=`
             <li><a href="${data[i].href}">${data[i].htit}</a></li>
        `
        }
        ul.html(html);
    })
});

