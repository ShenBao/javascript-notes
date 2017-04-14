
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


查询
select 列名称 from 表名称 [查询条件];
=、>、<、>=、<、!= 以及一些扩展运算符 is [not] null、in、like 等。 还可以对查询条件使用 or 和 and 进行组合查询

    select * from students where age > 21;
    select * from students where name like "%王%";
    select * from students where id<5 and age>20;

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
















