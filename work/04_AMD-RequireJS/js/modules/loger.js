/*定义一个有依赖的模块*/
define(['modules/dataService', 'jquery'], function (dataService, $) {

  function showMsg() {
    $('body').css('background', 'gray')
    console.log(dataService.getMsg())
  }

  return {showMsg}
})