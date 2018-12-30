// 地址
var domain = {
    commom: "http://139.199.89.116:8080",
    native: "localhost:8080"
}

// 具体的接口
var config = {
	url: {
        "getnewmd": domain.native + "/md/getnewmd", // 获取最新的5篇文章
        "getmd": domain.native + "/md/getmd",       // 通过博客名字获取一篇博客
         
	}
}