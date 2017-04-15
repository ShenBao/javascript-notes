
# 约束

MySQL中约束保存在information_schema数据库的table_constraints中，可以通过该表查询约束信息；

约束主要完成对数据的检验，保证数据库数据的完整性；如果有相互依赖数据，保证该数据不被删除。
 
常用五类约束：
    not null：非空约束，指定某列不为空
    unique： 唯一约束，指定某列和几列组合的数据不能重复
    primary key：主键约束，指定某列的数据不能重复、唯一
    foreign key：外键，指定该列记录属于主表中的一条记录，参照另一条数据
    check：检查，指定一个表达式，用于检验指定数据

注：MySQL不支持check约束，但可以使用check约束，而没有任何效果；


## not null约束

非空约束用于确保当前列的值不为空值，非空约束只能出现在表对象的列上。

Null类型特征：
    所有的类型的值都可以是null，包括int、float等数据类型
    空字符串“”是不等于null，0也不等于null

create table temp(
        id int not null,
        name varchar(255) not null default ‘abc’,
        sex char null
)
上面的table加上了非空约束，也可以用alter来修改或增加非空约束

增加非空约束
alter table temp
modify sex varchar(2) not null;
 
取消非空约束
alter table temp modify sex varchar(2) null;
 
取消非空约束，增加默认值
alter table temp modify sex varchar(2) default ‘abc’ null;


## unique

唯一约束是指定table的列或列组合不能重复，保证数据的唯一性。虽然唯一约束不允许出现重复的值，但是可以为多个null
同一个表可以有多个唯一约束，多个列组合的约束。在创建唯一约束的时候，如果不给唯一约束名称，就默认和列名相同。

唯一约束不仅可以在一个表内创建，而且可以同时多表创建组合唯一约束。

MySQL会给唯一约束的列上默认创建一个唯一索引；

create table temp (
        id int not null,
        name varchar(25),
        password varchar(16),
        --使用表级约束语法，
        constraint uk_name_pwd unique(name, password)
);
表示用户名和密码组合不能重复

添加唯一约束
alter table temp add unique(name, password);
alter table temp modify name varchar(25) unique;
删除约束
alter table temp drop index name;


## primary key

主键约束相当于唯一约束+非空约束的组合，主键约束列不允许重复，也不允许出现空值；如果的多列组合的主键约束，
那么这些列都不允许为空值，并且组合的值不允许重复。

每个表最多只允许一个主键，建立主键约束可以在列级别创建，也可以在表级别上创建。MySQL的主键名总是PRIMARY，
当创建主键约束时，系统默认会在所在的列和列组合上建立对应的唯一索引。



列模式：
create table temp(
    /*主键约束*/
    id int primary key,
    name varchar(25)
);
 
create table temp2(
    id int not null,
    name varchar(25),
    pwd varchar(15),
    constraint pk_temp_id primary key(id)
);
 
组合模式：
create table temp2(
    id int not null,
    name varchar(25),
    pwd varchar(15),
    constraint pk_temp_id primary key(name, pwd)
);
 
alter删除主键约束
alter table temp drop primary key;
 
alter添加主键
alter table temp add primary key(name, pwd);
 
alter修改列为主键
alter table temp modify id int primary key;
 
设置主键自增
create table temp(
        id int auto_increment primary key,
        name varchar(20),
        pwd varchar(16)
);
auto_increment自增模式，设置自增后在插入数据的时候就不需要给该列插入值了。


## foreign key 约束

外键约束是保证一个或两个表之间的参照完整性，外键是构建于一个表的两个字段或是两个表的两个字段之间的参照关系。
也就是说从表的外键值必须在主表中能找到或者为空。

当主表的记录被从表参照时，主表的记录将不允许删除，如果要删除数据，需要先删除从表中依赖该记录的数据，
然后才可以删除主表的数据。还有一种就是级联删除子表数据。

注意：外键约束的参照列，在主表中引用的只能是主键或唯一键约束的列，假定引用的主表列不是唯一的记录，
那么从表引用的数据就不确定记录的位置。同一个表可以有多个外键约束。

创建外键约束：
主表
create table classes(
        id int auto_increment primary key,
        name varchar(20)
);
从表
create table student(
        id int auto_increment,
        name varchar(22),
        constraint pk_id primary key(id),
        classes_id int references classes(id)
);
 
通常先建主表，然后再建从表，这样从表的参照引用的表才存在。
表级别创建外键约束：
create table student(
        id int auto_increment primary key,
        name varchar(25),
        classes_id int,
        foreign key(classes_id) references classes(id)
);
上面的创建外键的方法没有指定约束名称，系统会默认给外键约束分配外键约束名称，命名为student_ibfk_n，
其中student是表名，n是当前约束从1开始的整数。
 
指定约束名称：
create table student(
        id int auto_increment primary key,
        name varchar(25),
        classes_id int,
        /*指定约束名称*/
        constraint fk_classes_id foreign key(classes_id) references classes(id)
);
 
多列外键组合，必须用表级别约束语法：
create table classes(
        id int,
        name varchar(20),
        number int,
        primary key(name, number)
);
create table student(
        id int auto_increment primary key,
        name varchar(20),
        classes_name varchar(20),
        classes_number int,
        /*表级别联合外键*/
        foreign key(classes_name, classes_number) references classes(name, number)
);
 
删除外键约束：
alter table student drop foreign key student_ibfk_1;
alter table student drop foreign key fk_student_id;
 
增加外键约束
alter table student add foreign key(classes_name, classes_number) references classes(name, number);
 
自引用、自关联（递归表、树状表）
create table tree(
        id int auto_increment primary key,
        name varchar(50),
        parent_id int,
        foreign key(parent_id) references tree(id)
);
 
级联删除：删除主表的数据时，关联的从表数据也删除，则需要在建立外键约束的后面增加on delete cascade
或on delete set null，前者是级联删除，后者是将从表的关联列的值设置为null。
create table student(
        id int auto_increment primary key,
        name varchar(20),
        classes_name varchar(20),
        classes_number int,
        /*表级别联合外键*/
        foreign key(classes_name, classes_number) references classes(name, number) on delete cascade
);

## check约束

MySQL可以使用check约束，但check约束对数据验证没有任何作用。

create table temp(
        id int auto_increment,
        name varchar(20),
        age int,
        primary key(id),
/*check约束*/
check(age > 20)
);

上面check约束要求age必须大于0，但没有任何作用。但是创建table的时候没有任何错误或警告。
 




















