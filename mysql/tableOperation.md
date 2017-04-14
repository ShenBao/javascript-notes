
# 表操作

插入
insert [into] 表名 [(列名1, 列名2, 列名3, ...)] values (值1, 值2, 值3, ...);

    insert into students values(NULL, "王刚", "男", 20, "13811371377");主键自增可以不插入，所以用null代替
    insert into students (name, sex, age) values("孙丽华", "女", 21);
    insert into temp set id = 7, name = 'jason';Set方式插入，也可以指定列
    insert into temp values(null, ‘jack’, 22), (null, ‘jackson’ 23);    多行插入


更新
update 表名称 set 列名称=新值 where 更新条件;

    update students set name="张伟鹏", age=19 where id=1;

删除
delete from 表名称 where 删除条件;

    delete from students;
    delete from students where id=2;
    delete from students where age<20;


where条件查询
select 列名称 from 表名称 [查询条件];
=、>、<、>=、<、!= 以及一些扩展运算符 is [not] null、in、like 等。 还可以对查询条件使用 or 和 and 进行组合查询
    select * from students where age > 21;
    select * from students where name like "%王%";
    select * from students where id<5 and age>20;
    select age + 2, age / 2, age – 2, age * 2 from temp where age – 2 > 22;对查询的数据进行运算操作

concat函数，字符串连接
    select concat(name, ‘-eco’) from temp;
    concat和null进行连接，会导致连接后的数据成为null

as 对列重命名
    select name as ‘名称’ from temp;
    as也可以省略不写，效果一样
    如果重命名的列名出现特殊字符，如“‘”单引号，那就需要用双引号引在外面
    select name as “名’称” from temp;

给table去别名
select t.name Name from temp as t;

查询常量
    select 5 + 2;
    select concat('a', 'bbb');

distinct 去掉重复数据
    select distinct id from temp;
    多列将是组合的重复数据
    select distinct id, age from temp;

and 并且
    select * from temp where age > 20 and name = ‘jack’;
    查询名称等于jack并且年龄大于20的

or 或者
    满足一个即可
    select * from tmep where name = ‘jack’ or name = ‘jackson’;

between v and v2
    大于等于v且小于等于v2
    select * from temp where age between 20 and 25; 

in 查询
    可以多个条件 类似于or
    select * from temp where id in (1, 2, 3);

like 模糊查询
    查询name以j开头的:
        select * from temp where name like ‘j%’;
    查询name包含k的:
        select * from temp where name like ‘%k%’;
    escape转义:
        select * from temp where name like ‘\_%’ escape ‘\’;
        指定\为转义字符，上面的就可以查询name中包含“_”的数据

is null、is not null
    查询为null的数据
    select * from temp where name is null;
    查询不为null的数据
    select * from temp where name is not null;

not
    select * from temp where not (age > 20);
    取小于等于20的数据
    select * from temp where id not in(1, 2);

order by
    排序，有desc、asc升序、降序
    select * from temp order by id;
    默认desc排序
    select * from temp order by id asc;
    多列组合
    select * from temp order by id, age;




总数：select count as totalcount from table1
求和：select sum(field1) as sumvalue from table1
平均：select avg(field1) as avgvalue from table1
最大：select max(field1) as maxvalue from table1
最小：select min(field1) as minvalue from table1


查找：select * from table1 where field1 like ’%value1%’ ---like的语法很精妙，查资料!
排序：select * from table1 order by field1,field2 [desc]

group 
havding 
order by 
limit




truncate的作用就是删除该表里的全部数据，保留表结构。
truncate table name
















