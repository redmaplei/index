$(function () {


    var blogtitle = localStorage.getItem("blogtitle");
    // alert("blogtitle:xxxx"+blogtitle);

    var bloginfourl = "http://localhost:8080/md/getmd?blogtitle="+blogtitle;
    // var bloginfourl = "http://www.redwys.xyz/markdown/getOneMarkDownVO?blogTitle="+blogtitle;

    var urlread = "http://127.0.0.1:8080/md/getnewmd";


    $.ajax({
        url:bloginfourl,
        type:'GET',
        dataType:'json',
        contentType:'application/json; charset=UTF-8',
        success:function (data) {

            console.log(data);
            
            blog_read_info_vue.article = data;

            document.getElementById('content').innerHTML = marked(blog_read_info_vue.article.markdowninfo);

        },
        error: function() {
            console.log("xsss");
        }

    });



});

