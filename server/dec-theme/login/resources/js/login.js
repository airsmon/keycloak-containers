/*
 * @Author: zj.wang
 * @Date: 2020-12-29 10:45:26
 * @LastEditors: zj.wang
 * @LastEditTime: 2020-12-29 14:51:04
 * @Description: 
 */


(function() {
  var ie = !!(window.attachEvent && !window.opera);
  var wk = /webkit\/(\d+)/i.test(navigator.userAgent) && (RegExp.$1 < 525);
  var fn = [];
  var run = function () { for (var i = 0; i < fn.length; i++) fn[i](); };
  const d = document
  d.ready = function(f) {
    if (!ie && !wk && d.addEventListener){
      return d.addEventListener('DOMContentLoaded', f, false);
    }
    if (fn.push(f) > 1) return;
    
    if (ie) {
      (function () {
        try { d.documentElement.doScroll('left'); run(); }
        catch (err) { setTimeout(arguments.callee, 0); }
      })();
    }else if (wk){
      var t = setInterval(function () {
        if (/^(loaded|complete)$/.test(d.readyState))
          clearInterval(t), run();
      }, 0);
    }
  }
})();

var abc = abc || {};
(function(abc){
  console.log('abc',abc)
  return abc
})(abc);

document.ready(() => {
 
  document.getElementById('icon-showPwd').addEventListener('click',() => {
    let input_pwd = document.getElementById('password')
    let icon_pwd = document.getElementById('icon-showPwd')
    let icon_pwd_class = icon_pwd.className

    if (icon_pwd_class.includes('close')) {
      input_pwd.setAttribute('type', 'password')
      icon_pwd.setAttribute('class', 'show-pwd')
    } else {
      input_pwd.setAttribute('type', 'text')
      icon_pwd.setAttribute('class', 'show-pwd close')
    }
   
  })
})