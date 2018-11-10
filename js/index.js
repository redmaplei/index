$(function () {

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
        
});

