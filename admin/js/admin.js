
 var urlread = "http://127.0.0.1:8080/md/getnewmd";

 $.ajax({
     url:urlread,
     type:'GET',
     dataType:'json',
     contentType:'application/json; charset=UTF-8',
     success:function (data) {

         console.log(data);
         mdvue.articles = data;
         alert(data);
         // console.log("sd"+wenzan_vue.wenzans);
     },
     error: function() {
         console.log("xsss");
     }

 });

// function logout1() {
//     // layer.open({

//     //     title:"退出",
//     // });
//     layer.alert("确认退出吗", {
//         yes: function() {
//             layer.msg("退出成功");
//             location.reload();
//         }
        
//     });
// }

function logout() {

    layer.open({
        title:"退出",
        btn: ['确定', '取消'],
        content: "确认退出吗?",
        btn1: function() {
            layer.msg("退出成功");
            location.reload();
        },
        btn2: function() {

        }
    })
}