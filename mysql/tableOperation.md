
# 表操作

## 插入

insert [into] 表名 [(列名1, 列名2, 列名3, ...)] values (值1, 值2, 值3, ...);

    insert into students values(NULL, "王刚", "男", 20, "13811371377");主键自增可以不插入，所以用null代替
    insert into students (name, sex, age) values("孙丽华", "女", 21);
    insert into temp set id = 7, name = 'jason';Set方式插入，也可以指定列
    insert into temp values(null, ‘jack’, 22), (null, ‘jackson’ 23);    多行插入


## 更新

update 表名称 set 列名称=新值 where 更新条件;

    update students set name="张伟鹏", age=19 where id=1;

## 删除

delete from 表名称 where 删除条件;

    delete from students;
    delete from students where id=2;
    delete from students where age<20;

truncate的作用就是删除该表里的全部数据，保留表结构。

    truncate table tname

## where条件查询

select 列名称 from 表名称 [查询条件];

=、>、<、>=、<、!= 以及一些扩展运算符 is [not] null、in、like 等。 还可以对查询条件使用 or 和 and 进行组合查询

    select * from students where age > 21;
    select * from students where name like "%王%";
    select * from students where id<5 and age>20;
    select age + 2, age / 2, age – 2, age * 2 from temp where age – 2 > 22;对查询的数据进行运算操作

## 去重

select distinct 列名称 FROM 表名称

## concat函数，字符串连接

    select concat(name, ‘-eco’) from temp;
    concat和null进行连接，会导致连接后的数据成为null

## as 对列重命名

    select name as ‘名称’ from temp;
    as也可以省略不写，效果一样
    如果重命名的列名出现特殊字符，如“‘”单引号，那就需要用双引号引在外面
    select name as “名’称” from temp;

## 给table去别名

select t.name Name from temp as t;

## 查询常量

    select 5 + 2;
    select concat('a', 'bbb');

## distinct 去掉重复数据

    select distinct id from temp;
    多列将是组合的重复数据
    select distinct id, age from temp;

## and 并且

    select * from temp where age > 20 and name = ‘jack’;
    查询名称等于jack并且年龄大于20的

## or 或者

满足一个即可

    select * from tmep where name = ‘jack’ or name = ‘jackson’;

## between v and v2

大于等于v且小于等于v2

    select * from temp where age between 20 and 25; 

## in 查询
可以多个条件 类似于or

    select * from temp where id in (1, 2, 3);

## like 模糊查询

    查询name以j开头的:
        select * from temp where name like ‘j%’;
    查询name包含k的:
        select * from temp where name like ‘%k%’;
    escape转义:
        select * from temp where name like ‘\_%’ escape ‘\’;
        指定\为转义字符，上面的就可以查询name中包含“_”的数据

## is null、is not null

    查询为null的数据
        select * from temp where name is null;
    查询不为null的数据
        select * from temp where name is not null;

## not

    select * from temp where not (age > 20);
    取小于等于20的数据
    select * from temp where id not in(1, 2);

## order by

排序，有desc、asc升序、降序

    select * from temp order by id;
    默认desc排序
    select * from temp order by id asc;
    多列组合
    select * from temp order by id, age;

## char_length字符长度

    select char_length(tel) from user;

## 添加日期函数

    select date_add('2010-06-21', interval 2 month);
    interval是一个关键字，2 month是2个月的意思，2是数值，month是单位
    select addDate('2011-05-28', 2);
    在前面的日期上加上后面的天数

## 获取当前系统时间、日期

    select curdate();
    select curtime();

## 加密函数

    select md5('zhangsan');

## Null 处理函数

    select ifnull(birthday, 'is null birthday') from user;
    如果birthday为null，就返回后面的字符串
    
    select nullif(age, 245) from user;
    如果age等于245就返回null，不等就返回age
    
    select isnull(birthday) from user;
    判断birthday是否为null
    
    select if(isnull(birthday), 'birthday is null', 'birthday not is null') from user;
    如果birthday为null或是0就返回birthday is null，否则就返回birthday not is null；类似于三目运算符


## case 

case函数是一个流程控制函数，可以接受多个参数，但最终只会返回一个结果。

    select name, 
    age, 
    (case sex
        when 1 then '男'
        when 0 then '女'
        else '火星人'
        end
    ) sex
    from user;

## avg平均值运算

    select avg(age) from user;
    select avg(distinct age) from user;

## count 记录条数统计

    select count(*), count(age), count(distinct age) from user;

## max 最大值

    select max(age), max(distinct age) from user;

## min 最小值

    select min(age), min(distinct age) from user;

## sum 求和、聚和

    select sum(age), sum(distinct age) from user;
    select sum(ifnull(age, 0)) from user;

## group by 分组

    select count(*), sex from user group by sex;
    select count(*) from user group by age;
    select * from user group by sex, age;

## having进行条件过滤

    不能在where子句中过滤组，where子句仅用于过滤行。过滤group by需要having
    不能在where子句中用组函数，having中才能用组函数
    select count(*) from user group by sex having sex <> 2;

## limit

    select * from table limit m,n
    其中m是指记录开始的index，从0开始，表示第一条记录
    n是指从第m+1条开始，取n条。
    select * from tablename limit 2,4
    即取出第3条至第6条，4条记录

## in 、not in

    select * from table1 where id not in (1,2,3,4,5)







## sin函数
    select sin(age) from user;
    select sin(1.57);

