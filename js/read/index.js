
// 主页获取文章列表
$(function () {
    // var urlread = "http://139.199.89.116:8080/md/getnewmd";
    var urlread = config.url.getnewmd;
    console.log(urlread);
    $.ajax({
        url:config.url.getnewmd,
        type:'GET',
        contentType:'application/json; charset=UTF-8',
        success:function (data) {
            wenzan_vue.wenzans = data;
        },
        error: function() {
            console.log("xsss");
        }

    });
        
});

