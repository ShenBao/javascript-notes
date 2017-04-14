
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





















