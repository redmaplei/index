
$(function () {

    var url = "http://localhost:8080/md/getnewmd"
    // var url = "http://localhost:8080/markdown/getAllMarkDownVO"
    // var url = "http://www.redwys.xyz/markdown/getAllMarkDownVO";
    //var blogtitle = "tomcat的使用";
    //var url = "http://localhost:8080/markdown/getOneBlogToTitle?blogTitle="+blogtitle;

    $.ajax({
        url:url,
        type:'GET',
        dataType:"json",
        contentType:'application/json; charset=UTF-8',
        //"application/x-www-form-urlencoded; charset=utf-8",
//                        data:JSON.stringify(this.user), parse
        //JSON.parse(data)
        success:function (data) {

            wenzan_vue.wenzans = data;

           // console.log("sd"+wenzan_vue.wenzans);
        }
    });

});


