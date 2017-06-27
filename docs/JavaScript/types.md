# 数据类型

## 概述

JavaScript 语言的每一个值，都属于某一种数据类型。JavaScript 的数据类型，共有六种。（ES6 又新增了第七种 Symbol 类型的值）

- 数值（number）：整数和小数（比如1和3.14）
- 字符串（string）：字符组成的文本（比如"Hello World"）
- 布尔值（boolean）：`true`（真）和`false`（假）两个特定值
- `undefined`：表示“未定义”或不存在，即由于目前没有定义，所以此处暂时没有任何值
- `null`：表示无值，即此处的值就是“无”的状态。
- 对象（object）：各种值组成的集合

通常，我们将数值、字符串、布尔值称为原始类型（primitive type）的值，即它们是最基本的数据类型，不能再细分了。而将对象称为合成类型（complex type）的值，因为一个对象往往是多个原始类型的值的合成，可以看作是一个存放各种值的容器。至于`undefined`和`null`，一般将它们看成两个特殊值。

对象又可以分成三个子类型。

- 狭义的对象（object）
- 数组（array）
- 函数（function）

狭义的对象和数组是两种不同的数据组合方式，而函数其实是处理数据的方法。JavaScript把函数当成一种数据类型，可以像其他类型的数据一样，进行赋值和传递，这为编程带来了很大的灵活性，体现了JavaScript作为“函数式语言”的本质。

这里需要明确的是，JavaScript的所有数据，都可以视为广义的对象。不仅数组和函数属于对象，就连原始类型的数据（数值、字符串、布尔值）也可以用对象方式调用。一般情况”对象“都特指狭义的对象。


## typeof运算符

JavaScript有三种方法，可以确定一个值到底是什么类型。

- `typeof`运算符
- `instanceof`运算符
- `Object.prototype.toString`方法

<!--`instanceof`运算符和`Object.prototype.toString`方法。-->

`typeof`运算符可以返回一个值的数据类型，可能有以下结果。

**（1）原始类型**

数值、字符串、布尔值分别返回`number`、`string`、`boolean`。

```javascript
typeof 123 // "number"
typeof '123' // "string"
typeof false // "boolean"
```

**（2）函数**

函数返回`function`。

```javascript
function f() {}
typeof f
// "function"
```

**（3）undefined**

`undefined`返回`undefined`。

```javascript
typeof undefined
// "undefined"
```

利用这一点，typeof可以用来检查一个没有声明的变量，而不报错。

```javascript
v
// ReferenceError: v is not defined

typeof v
// "undefined"
```

上面代码中，变量`v`没有用`var`命令声明，直接使用就会报错。但是，放在`typeof`后面，就不报错了，而是返回`undefined`。

实际编程中，这个特点通常用在判断语句。

```javascript
// 错误的写法
if (v) {
  // ...
}
// ReferenceError: v is not defined

// 正确的写法
if (typeof v === "undefined") {
  // ...
}
```

**（4）其他**

除此以外，其他情况都返回`object`。

```javascript
typeof window // "object"
typeof {} // "object"
typeof [] // "object"
typeof null // "object"
```

从上面代码可以看到，空数组（`[]`）的类型也是`object`，这表示在JavaScript内部，数组本质上只是一种特殊的对象。

另外，`null`的类型也是`object`，这是由于历史原因造成的。1995年JavaScript语言的第一版，所有值都设计成32位，其中最低的3位用来表述数据类型，`object`对应的值是`000`。当时，只设计了五种数据类型（对象、整数、浮点数、字符串和布尔值），完全没考虑`null`，只把它当作`object`的一种特殊值，32位全部为0。这是`typeof null`返回`object`的根本原因。

为了兼容以前的代码，后来就没法修改了。这并不是说`null`就属于对象，本质上`null`是一个类似于`undefined`的特殊值。

既然`typeof`对数组（array）和对象（object）的显示结果都是`object`，那么怎么区分它们呢？`instanceof`运算符可以做到。

```javascript
var o = {};
var a = [];

o instanceof Array // false
a instanceof Array // true
```
