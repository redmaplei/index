
$(function () {

    var page = 1;

    var url = "http://localhost:8080/md/getPagemd?page="+page;
    $.ajax({
        url:url,
        type:'GET',
        dataType:"json",
        contentType:'application/json; charset=UTF-8',
        // data:"page":1,
        //"application/x-www-form-urlencoded; charset=utf-8",
//                        data:JSON.stringify(this.user), parse
        //JSON.parse(data)
        success:function (data) {
            console.log(data);
            wenzan_vue.wenzans = data;
            // console.log("sd"+wenzan_vue.wenzans);
        }
    });

});
