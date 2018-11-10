$(function () {


    var blogtitle = localStorage.getItem("blogtitle");
    // alert("blogtitle:xxxx"+blogtitle);

    var bloginfourl = "http://localhost:8080/md/getmd?blogtitle="+blogtitle;
    // var bloginfourl = "http://www.redwys.xyz/markdown/getOneMarkDownVO?blogTitle="+blogtitle;

    var urlread = "http://127.0.0.1:8080/md/getnewmd";


    // $.ajax({
    //     url:urlread,
    //     type:'GET',
    //     dataType:'json',
    //     contentType:'application/json; charset=UTF-8',
    //     success:function (data) {

    //         console.log(data);

    //     },
    //     error: function() {
    //         console.log("xsss");
    //     }

    // });

    $.ajax({
        url:bloginfourl,
        type:'GET',
        dataType:'json',
        contentType:'application/json; charset=UTF-8',
        success:function (data) {

            console.log(data);
            
            blog_read_info_vue.article = data;
            
            console.log(blog_read_info_vue.article.markdowninfo);

            blog_read_info_vue.blogdata = blog_read_info_vue.article.markdowninfo;

            console.log(blog_read_info_vue.blogdata);

            // document.getElementById('content').innerHTML = marked(blog_read_info_vue.blogdata);

            // $(function(){
            //     editormd.markdownToHTML(blog_read_info_vue.blogdata)  
            // });

            // var s = $("#read_textera");
            // console.log("43");
            // console.log($("#read_textera").text());
            // $("#read_textera").text("jfdgldjfgl");
            // console.log($("#aaa").text());
            // $("#aaa").text("jfdgldjfgl");

        },
        error: function() {
            console.log("xsss");
        }

    });

    editormd.markdownToHTML("blog_read_editormd", {

        // markdown: blog_read_info_vue.blogdata,
        
        htmlDecode: "style,script,iframe", // 可以过滤标签解码
        emoji: true,
        taskList:true,
        tex: true,               // 默认不解析
        flowChart:true,         // 默认不解析
        sequenceDiagram:true,  // 默认不解析
    
        editorTheme: "pastel-on-dark",
        theme: "gray",
        previewTheme: "dark",
        path :  '../editormd/lib/'
    });


});

