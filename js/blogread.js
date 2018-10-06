
$(function () {

    mdfunciton();

    var blogtitle = localStorage.getItem("blogtitle");
    //alert("blogtitle:xxxx"+blogtitle);

    var bloginfourl = "http://localhost:8080/markdown/getOneMarkDownVO?blogTitle="+blogtitle;
    // var bloginfourl = "http://www.redwys.xyz/markdown/getOneMarkDownVO?blogTitle="+blogtitle;
    $.ajax({
        url:bloginfourl,
        type:'GET',
        dataType:"json",
        contentType:'application/json; charset=UTF-8',
        success:function (data) {
            blog_read_info_vue.wenzan = data;

        }
    });

    var url = "http://localhost:8080/markdown/getOneBlogToTitle?blogTitle="+blogtitle;
    // var url = "http://www.redwys.xyz/markdown/getOneBlogToTitle?blogTitle="+blogtitle;
    $.ajax({
        url:url,
        type:'GET',
        contentType:'application/json; charset=UTF-8',
        success:function (data) {
            //alert(data);
            document.getElementById("blog_read_editormd").innerText = data;

            mdfunciton();
            //blog_read_editormd_vue.blogcontent = data;
        }
    });



});

function mdfunciton() {

    var testEditor;

    testEditor = editormd.markdownToHTML("blog_read_editormd", {
        htmlDecode      : "style,script,iframe",
        emoji           : true,
        taskList        : true,
        tex             : true,  // 默认不解析
        flowChart       : true,  // 默认不解析
        sequenceDiagram : true,  // 默认不解析
        previewCodeHighlight : true,
    });

    // alert("blogtitle:"+blogtitle);
}
