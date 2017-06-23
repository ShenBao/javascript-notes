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

## 假如手机网站不用兼容IE浏览器，一般我们会使用zeptojs。
    zeptojs内置Touch events方法，具体可以看http://zeptojs.com/#Touch events
看了一下zeptio新版的API，已经支持IE10以上浏览器，对zeptojs可以选择使用！

## 防止手机中网页放大和缩小，这点是最基本的，最为手机网站开发者来说应该都知道的，就是设置meta中的viewport
还有就是，有些手机网站我们看到如下声明：
```
代码如下:
<!DOCTYPE html PUBLIC "-//WAPFORUM//DTD XHTML Mobile 1.0//EN" "http://www.wapforum.org/DTD/xhtml-mobile10.dtd">
```
设置了DTD的方式是XHTML的写法，假如我们页面运用的是html5，可以不用设置DTD,直接声明<!DOCTYPE html>。
使用viewport使页面禁止缩放。 通常把user-scalable设置为0来关闭用户对页面视图缩放的行为。
```
<meta name="viewport" content="user-scalable=0" />
```
但是为了更好的兼容，我们会使用完整的viewport设置。

代码如下
```
<meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=0" />
```
当然，user-scalable=0,有的人也写成user-scalable=no，都可以的。


## apple-mobile-web-app-capable
apple-mobile-web-app-capable是设置Web应用是否以全屏模式运行。
语法：
```
<meta name="apple-mobile-web-app-capable" content="yes">
```
说明：
如果content设置为yes，Web应用会以全屏模式运行，反之，则不会。content的默认值是no，表示正常显示。你可以通过只读属性window.navigator.standalone来确定网页是否以全屏模式显示。

## format-detection
format-detection 启动或禁用自动识别页面中的电话号码。
语法：
```
<meta name="format-detection" content="telephone=no">
```
说明：默认情况下，设备会自动识别任何可能是电话号码的字符串。设置telephone=no可以禁用这项功能。

## html5调用安卓或者ios的拨号功能
html5提供了自动调用拨号的标签，只要在a标签的href中添加tel:就可以了。
如下：
```
<a href="tel:4008106999,1034">400-810-6999 转 1034</a>
```
拨打手机直接如下
```
<a href="tel:15677776767">点击拨打15677776767</a>
```

## html5GPS定位功能
具体请看：http://www.jb51.net/post/html5_GPS_getCurrentPosition

## 上下拉动滚动条时卡顿、慢
```
body {
    -webkit-overflow-scrolling: touch;
    overflow-scrolling: touch;
}
```
Android3+和iOS5+支持CSS3的新属性为overflow-scrolling

## 禁止复制、选中文本
```
Element {
    -webkit-user-select: none;
    -moz-user-select: none;
    -khtml-user-select: none;
    user-select: none;
}
```
解决移动设备可选中页面文本(视产品需要而定)


## 长时间按住页面出现闪退
```
element {
    -webkit-touch-callout: none;
}
```

## iphone及ipad下输入框默认内阴影
```
Element{
    -webkit-appearance: none;
}
```

## ios和android下触摸元素时出现半透明灰色遮罩
```
Element {
    -webkit-tap-highlight-color:rgba(255,255,255,0)
}
```
设置alpha值为0就可以去除半透明灰色遮罩，备注：transparent的属性值在android下无效。
后面一篇文章有详细介绍，地址：http://www.jb51.net/post/phone_web_ysk

## active兼容处理 即 伪类 :active 失效
方法一：body添加ontouchstart
```
<body ontouchstart="">
```
方法二：js给 document 绑定 touchstart 或 touchend 事件
```
<style>
    a {
         color: #000;
    }
    a:active {
         color: #fff;
    }
</style>
<a herf=foo >bar</a>
<script>
     document.addEventListener('touchstart',function(){},false);
</script>
```

## 动画定义3D启用硬件加速
```
Element {
    -webkit-transform:translate3d(0, 0, 0)
    transform: translate3d(0, 0, 0);
}
```
注意：3D变形会消耗更多的内存与功耗

## Retina屏的1px边框
```
Element{
    border-width: thin;
}
```

## webkit mask 兼容处理
某些低端手机不支持css3 mask，可以选择性的降级处理。
比如可以使用js判断来引用不同class：
```
if( 'WebkitMask' in document.documentElement.style){
    alert('支持mask');
} else {
    alert('不支持mask');
}
```

## 旋转屏幕时，字体大小调整的问题
```
html, body, form, fieldset, p, div, h1, h2, h3, h4, h5, h6 {
    -webkit-text-size-adjust:100%;
}
```

## transition闪屏
/设置内嵌的元素在 3D 空间如何呈现：保留3D /
```
-webkit-transform-style: preserve-3d;
```
/ 设置进行转换的元素的背面在面对用户时是否可见：隐藏 /
```
-webkit-backface-visibility:hidden;
```
## 圆角bug
某些Android手机圆角失效
```
background-clip: padding-box;
```


















