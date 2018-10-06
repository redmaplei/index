
//    调用编辑器
var testEditor;
$(function() {
    testEditor = editormd("test-editormd", {
        width   : "1000px",
        height  : 640,
        syncScrolling : "single",
        // path    : "../public/editormd/lib/"
        path    : "/F:/js_pluges/editor.md-master/lib/"
    });
});


// //获取编辑器内容
// blog_read_editormd_vue.blogcontent = encodeURIComponent(testEditor.getMarkdown());
