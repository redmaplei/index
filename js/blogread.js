$(function () {


    var blogtitle = localStorage.getItem("blogtitle");
    // alert("blogtitle:xxxx"+blogtitle);

    var bloginfourl = "http://localhost:8080/md/getmd?blogtitle="+blogtitle;
    // var bloginfourl = "http://www.redwys.xyz/markdown/getOneMarkDownVO?blogTitle="+blogtitle;

    $.ajax({
        url:bloginfourl,
        type:'GET',
        dataType:'json',
        contentType:'application/json; charset=UTF-8',
        success:function (data) {
            console.log(32);
            console.log(data);
        }

    });


    $.ajax({
        url:bloginfourl,
        type:'GET',
        dataType:"json",
        contentType:'application/json; charset=UTF-8',
        success:function (data) {
            alert(23);
            console.log("16" + data);
            blog_read_info_vue.article = data;
            var content = blog_read_info_vue.article.mdContent;
            // $("#read_textera").val(content);

            

            var content=$("#read_textera").val();
            console.log(34);
            console.log(content);
            $("#read_textera").text("cvxcvxcvxcv");

            console.log($("#read_textera").text());
            $("#read_textera").text(content);
        //    document.getElementById('read_textera').value = content;
            console.log($("#read_textera").text());
            // console.log(blog_read_info_vue.article.mdContent);
            // console.log(content);
            
        }
    });

    editormd.markdownToHTML("blog_read_editormd", {
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

