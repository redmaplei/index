
function addmd() {
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