
# 标准sql

标准的SQL语句通常划分为以下类型：
    查询语句：主要由于select关键字完成，查询语句是SQL语句中最复杂，功能最丰富的语句。
    DML（Data Munipulation Language，数据操作语言）语句，这组DML语句修改后数据将保持较好的一致性；操作表的语句，如插入、修改、删除等；
    DDL（Data Definition Language，数据定义语言）语句，操作数据对象的语言，有create、alter、drop。
    DCL（Data Control Language，数据控制语言）语句，主要有grant、revoke语句。
    事务控制语句：主要有commit、rollback和savepoint三个关键字完成


## 字符（串）函数
|名称|描述|
|------|-----|
|CONCAT|字符串连接
|CONCAT_WS|同上，但指定连接符
|FORMAT|数字格式化
|LOWER|转换成小写字母
|UPPER|转换成大写字母
|LEFT|获取左侧字符
|RIGHT|获取右侧字符
|LENGTH|获取长度
|LTRIM|删除前导空格
|RTRIM|删除后续空格
|TRIM|删除前后空格
|SUBSTRING|字符串截取
|[NOT] LIKE|模式匹配
|REPEAT|重复字符串
|REPLACE|字符串替换


## 数值运算
|----|---
|名称|描述|
|---|----
|CEIL()|进一取整
|DIV|整数除法
|FLOOR()|舍一取整
|MOD|模运算
|POWER()|幂运算
|ROUND()|四舍五入
|TRUNCARE()|数字截取



## 比较运算符与函数
|名称|描述|
|---|----
|[NOT] BETWEEN...AND...|[不]在范围内
|[NOT] IN()|[不]在列出的值范围内
|IS [NOT] NULL|[不]为空



日期时间函数
--------
|名称|描述|
|----|----
|NOW()|当前日期和时间
|CURDATE()|当前日期
|CURTIME()|当前时间
|DATE_ADD()|日期变化
|DATEDIFF()|日期差值
|DATE_FORMATE()|日期格式化
###NOW/CURDATE/CURTIME
可以把NOW看作是CURDATE和CURTIME的综合
###DATE_ADD
实现日志的增减，加为正数，减为负数
```mysql
SELECT DATE_ADD(CURDATE(),INTERVAL 3 WEEK);
```
WEEK,也可以是DAY，YEAR
与之相对的还有一个DATE_SUB函数。
###DATEDIFF
获取两个日期之间的差值，左边减去右边，值为天数。
```MYSQL
SELECT DATEDIFF('2014-10-11','2014-09-06');
```
###DATE_FORMAT()
日期格式化为其他形式，比如：
```mysql
SELECT DATE_FORMAT('2014-11-01','%m/%d/%Y');
```
结果为：
11/01/2014  
如果是小写的y，则格式化为11/01/14




























