$(function () {

    var blogtitle = localStorage.getItem("blogtitle");
    $.ajax({
        url:config.url.getmd,
        type:'GET',
        autoParam: blogtitle,
        contentType:'application/json; charset=UTF-8',
        success:function (data) {
            console.log(data);
            blog_read_info_vue.article = data;
            document.getElementById('content').innerHTML = marked(blog_read_info_vue.article.mdContent);
        },
        error: function() {
            console.log("xsss");
        }
    });

});

