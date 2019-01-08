/*AMD_require.js模块化的入口文件，要编写配置对象，并且有固定的写法*/
requirejs.config({
  //基本路径
  //baseUrl: "js/",
  //模块标识名与模块路径映射
  paths: {
    "loger": "modules/loger.js",
    "dataService": "modules/dataService",
    "jquery":"libs/jquery-1.10.1"
  }
})

//引入使用模块
requirejs( ['loger'], function(loger) {
  loger.showMsg()
})

