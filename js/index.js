$(function () {

    var urlread = "http://139.199.89.116:8080/md/getnewmd";

    $.ajax({
        url:urlread,
        type:'GET',
        dataType:'json',
        contentType:'application/json; charset=UTF-8',
        success:function (data) {
            wenzan_vue.wenzans = data;
        },
        error: function() {
            console.log("xsss");
        }

    });
        
});

