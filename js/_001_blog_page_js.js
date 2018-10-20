

$(function () {

    var url = "http://127.0.0.1:8090/markdown/getAllMarkDownVO"
    // var url = "http://www.redwys.xyz/markdown/getAllMarkDownVO";
    //var blogtitle = "tomcat的使用";
    //var url = "http://localhost:8080/markdown/getOneBlogToTitle?blogTitle="+blogtitle;

    // $.ajax({
    //     url:url,
    //     type:'GET',
    //     dataType:'jsonp',
    //     contentType:'application/json; charset=UTF-8',
    //     success:function (data) {

    //         console.log(3443);
    //         console.log(data);
    //       //  wenzan_vue.wenzans = data;

    //        // console.log("sd"+wenzan_vue.wenzans);
    //     },
    //     error: function() {
    //         console.log("xxxxx");
    //     }

    // });

    // xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
    var urlread = "http://127.0.0.1:8080/md/getnewmd";

    $.ajax({
        url:urlread,
        type:'GET',
        dataType:'json',
        contentType:'application/json; charset=UTF-8',
        success:function (data) {

            console.log(data);
            wenzan_vue.wenzans = data;
            // console.log("sd"+wenzan_vue.wenzans);
        },
        error: function() {
            console.log("xsss");
        }

    });


    // var fids = "sdfsd";
    // var encrypt = "true";
    // var expireTime = 7;

    // $.ajax({
    //     url: "http://192.168.2.86:8080/share/create",
    //     dataType: 'json',
    //     type: 'post',
    //     data:{
    //     		"fids": fids,"encrypt": encrypt,"expireTime": expireTime
    //     },
    //     beforeSend: function (xhr) {
    //         xhr.setRequestHeader("Test", "testheadervalue");

    //     },
    //     async: false,
    //     cache: false,
    //     //contentType: 'application/x-www-form-urlencoded',
    //     success: function (sResponse) {

    //         console.log(sResponse);

    //     }
        

    // });

    // var urlpan = "http://192.168.2.239:8080/disk/files/get?page=1&limit=10&pid=1";

    // $.ajax({
    //     url:urlpan,
    //     type:'GET',
    //     dataType:'json',
    //     contentType:'application/json; charset=UTF-8',
    //     success:function (data) {

    //         console.log(data);

    //     },
        // error: function() {
        //     console.log("xsss");
        // }

    // });


});

 


