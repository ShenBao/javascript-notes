###JS类型转换奇技淫巧

> 很酷炫有木有！！！因为可读性低，所以有些技巧并不提倡使用。但遇见别人这样写，得看得懂是怎么一回事！

* 转布尔型
```js
!!''         //=> false
!!null       //=> false
!!undefined  //=> false
!!NaN        //=> false
!!0          //=> false
!!1          //=> true
!!-1         //=> true
!![]         //=> true
!!{}         //=> true
!!window     //=> true
!!Infinity   //=> true
```
* 转字符串
```js
'' + 123      //=> '123'
'' + true     //=> 'true'
```
* 转数值型
```js
+new Date     //=> 1456480246437
+'123'        //=> 123
```
* 向下取整
```js
~~3.4          //=> 3
3.4|0          //=> 3
-3.4^0         //=> -3
-3.4 >> 0      //=> -3
```
* indexOf判断
```js
var arr = [1,2,3];
if(!~arr.indexOf(4)){
  arr.push(4);
}
!!~arr.indexOf(1) //=> true
!!~arr.indexOf(5) //=> false
arr.includes(1)   //=> true
arr.includes(5)   //=> false
```
* 类数组转数组
```js
var arrLike = {0:'abc',1:'xyz',length:2};
Array.prototype.slice.call(arrLike)        //=> ['abc','xyz']
Array.from(arrLike)                        //=> ['abc','xyz']
//常用 Array.prototype.slice.call(arguments)
```
