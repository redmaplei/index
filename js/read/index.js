
// 主页获取文章列表
$(function () {
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

