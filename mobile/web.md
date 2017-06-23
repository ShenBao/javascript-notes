# 移动端Web页面问题解决方案


## 安卓浏览器看背景图片，有些设备会模糊。
用同等比例的图片在PC机上很清楚，但是手机上很模糊，原因是什么呢？

经过研究，是devicePixelRatio作怪，因为手机分辨率太小，如果按照分辨率来显示网页，这样字会非常小，所以苹果当初就把iPhone 4的960640分辨率，在网页里只显示了480320，这样devicePixelRatio＝2。现在android比较乱，有1.5的，有2的也有3的。

想让图片在手机里显示更为清晰，必须使用2x的背景图来代替img标签（一般情况都是用2倍）。例如一个div的宽高是100100，背景图必须得200200，然后background-size:contain;，这样显示出来的图片就比较清晰了。

代码可以如下：
```
background:url(../images/icon/all.png) no-repeat center center;
-webkit-background-size:50px 50px;
background-size: 50px 50px;display:inline-block; width:100%; height:50px; 
或者指定 background-size:contain;都可以，大家试试！
```

## 图片加载
若您遇到图片加载很慢的问题，对这种情况，手机开发一般用canvas方法加载：
具体的canvas API 参见：http://javascript.ruanyifeng.com/htmlapi/canvas.html

下面举例说明一个canvas的例子：
```
<li><canvas></canvas></li>
```
js动态加载图片和li 总共举例17张图片！
```
var total=17;
var zWin=$(window);
var render=function(){
    var padding=2;
    var winWidth=zWin.width();
    var picWidth=Math.floor((winWidth-padding*3)/4);
    var tmpl ='';
    for (var i=1;i<=totla;i++){
        var p=padding;
        var imgSrc='img/'+i+'.jpg';
        if(i%4==1){
            p=0;
        }
        tmpl +='<li style="width:'+picWidth+'px;height:'+picWidth+'px;padding-left:'+p+'px;padding-top:'+padding+'px;"><canvas id="cvs_'+i+'"></canvas></li>';
        var imageObj = new Image();
        imageObj.index = i;
        imageObj.onload = function(){
            var cvs =$('#cvs_'+this.index)[0].getContext('2d');
            cvs.width = this.width;
            cvs.height=this.height;
            cvs.drawImage(this,0,0);
        }
        imageObj.src=imgSrc;
    }
}
render();
```









