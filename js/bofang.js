   /* window.onload = function () {
      var obj = document.getElementById("selectId");
      var url = document.getElementById("addressUrl");
      var videoObj = document.getElementById("player");
      document.getElementById('played').onclick = function () {
        if (obj.value && url.value) {
          videoObj.src = obj.value + url.value
        }
      }
    }   1.1 版本的 js*/
	
window.onload = function () {
      var obj = document.getElementById("selectId");
      var url = document.getElementById("addressUrl");
      var videoObj = document.getElementById("player");
	  var a=['top','left'],b=0; 
      document.getElementById('played').onclick = function () {

      if (obj.value && url.value) {
			
	  var loc = location.href;
      var n1 = loc.length;//地址的总长度
      var t = loc.indexOf("=");//取得t号的位置
	 // var tt = loc.indexOf("tt=");//取得t号的位置
      var name = decodeURI(loc.substr(t + 1, n1));//从=号后面的内容
	 // var pass = decodeURI(loc.substr(tt + 3, n1));
	  //var passtwo = MD5(name);
		//if (pass != passtwo(name.length, passtwo.length))
	 //if((name.length + 1) === loc.length)
		 if(t == -1)
		{
			alert("请先登陆！");
			//alert(name);
			window.location = '..';
		}else
		{
		   videoObj.src = obj.value + url.value;
		}
     }else
		{
        var u=setInterval(function(){ 
         url.style[a[b%2]]=(b++)%4<2?0:4; 
         if(b>25){clearInterval(u);b=0} 
         },30) 
		}
      }
    }
	// 1.2 版本js 20171109 by xies