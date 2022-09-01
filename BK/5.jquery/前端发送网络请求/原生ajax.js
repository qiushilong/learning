let oAjax = new XMLHttpRequest();
let url = ''

oAjax.open('get', url);

oAjax.onreadystatechange = function () {
  //状态为4表示请求成功,得到响应
  if (oAjax.readyState == 4) {
    //打印响应信息
    console.log(oAjax.responseText);
  }
}

//post请求需要指定编码
// oAjax.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')

//post设置提交值
// oAjax.send('content=123&id=345')


//发送
oAjax.send();