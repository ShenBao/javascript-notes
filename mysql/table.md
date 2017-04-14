
# table


显示当前使用数据库所有的表对象
show table;


显示表结构describe（desc）
desc tableName;


创建新表
create table tabname(col1 type1 [not null] [primary key],col2 type2 [not null],..)

根据已有的表创建新表
A：create table tab_new like tab_old (使用旧表创建新表)
B：create table tab_new as select col1,col2… from tab_old definition only

删除表
drop table tabname


创建后表的修改

添加列
alter table 表名 add 列名 列数据类型 [after 插入位置];
    在表的最后追加列 address: alter table students add address char(60);
    在名为 age 的列后插入列 birthday: alter table students add birthday date after age;
添加多列alter table user add ( photo blob,birthday date);

修改列
alter table 表名 change 列名称 列新名称 新数据类型;
    将表 tel 列改名为 telphone: alter table students change tel telphone char(13) default "-";
    将 name 列的数据类型改为 char(16): alter table students change name name char(16) not null;

删除列
alter table 表名 drop 列名称;
    删除 birthday 列: alter table students drop birthday;

重命名表
alter table 表名 rename 新表名;
    重命名 students 表为 workmates: alter table students rename workmates;
    重命名并移动位置alter table users change sex u_sex varchar(10) after u_name;

修改tel列的位置，在第一列显示
alter table user modify tel varchar(15) default '02087654321' first;
修改tel列的位置，在指定列之后显示
alter table user modify tel varchar(15) default '02087654321' after age;

但是MySQL可以通过多个modify的方式完成：
alter table user 
    modify tel varchar(15) default '02087654321' first, 
    modify name varchar(20) after tel;
注意：alter modify不支持一次修改多个列，但是Oracle支持多列修改


添加主键:Alter table tabname add primary key(col)
删除主键:Alter table tabname drop primary key(col)

创建索引:create [unique] index idxname on tabname(col….)
删除索引:drop index idxname  //注：索引是不可更改的，想更改必须删除重新建。

创建视图：create view viewname as select statement
删除视图：drop view viewname


修改表名：rename table oldtablename to newtableneme（库名是不能改的）







子查询建表方法

查找并添加于新表
create table userInfo as select * from user;

部分列名匹配模式：
create table userInfo (
    name varchar(20),
    sex char
    ) 
as 
select name, sex from user;












