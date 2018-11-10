$(function () {


    var blogtitle = localStorage.getItem("blogtitle");

    var bloginfourl = "http://localhost:8080/md/getmd?blogtitle="+blogtitle;
    // var bloginfourl = "http://www.redwys.xyz/markdown/getOneMarkDownVO?blogTitle="+blogtitle;

    $.ajax({
        url:bloginfourl,
        type:'GET',
        dataType:'json',
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

