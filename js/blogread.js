
$(function () {


    var blogtitle = localStorage.getItem("blogtitle");
    // alert("blogtitle:xxxx"+blogtitle);

    var bloginfourl = "http://localhost:8080/md/getmd?blogtitle="+blogtitle;
    // var bloginfourl = "http://www.redwys.xyz/markdown/getOneMarkDownVO?blogTitle="+blogtitle;
    $.ajax({
        url:bloginfourl,
        type:'GET',
        dataType:"json",
        contentType:'application/json; charset=UTF-8',
        success:function (data) {
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
                htmlDecode: "style,script,iframe", //可以过滤标签解码
                emoji: true,
                taskList:true,
                tex: true,               // 默认不解析
                flowChart:true,         // 默认不解析
                sequenceDiagram:true,  // 默认不解析
            
                editorTheme: "pastel-on-dark",
                theme: "gray",
                previewTheme: "dark",
                path :  '../editormd/lib/'

                // width        : "90%",
                // height       : 720,
                
                // // Editor.md theme, default or dark, change at v1.5.0
                // // You can also custom css class .editormd-preview-theme-xxxx
                // theme        :  "dark",
                
                // // Preview container theme, added v1.5.0
                // // You can also custom css class .editormd-preview-theme-xxxx
                // previewTheme :  "dark", 
                
                // // Added @v1.5.0 & after version is CodeMirror (editor area) theme
                // editorTheme  :  "pastel-on-dark", 
    });

});

