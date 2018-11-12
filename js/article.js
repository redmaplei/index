
$(function () {

    var a = 1;

    pagemd(a);
   

});

/**
 * 请求article函数
 * @param {*页数} page 
 */
function pagemd(page) {

    var url = "http://139.199.89.116:8080/md/getPagemd?page="+page;
    $.ajax({
        url:url,
        type:'GET',
        dataType:"json",
        contentType:'application/json; charset=UTF-8',
        // data:"page":1,
        success:function (data) {
            console.log(data);
            article_vue.articles = data;
        }
    });

}

function turnpage() {
    
}