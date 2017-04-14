
# 视图


视图就是一个表或多个表的查询结果，它是一张虚拟的表，因为它并不能存储数据。
视图的作用、优点：
限制对数据的访问
让复杂查询变得简单
提供数据的独立性
可以完成对相同数据的不同显示
    
创建、修改视图
create or replace view view_temp
as
    select name, age from temp;
通常我们并不对视图的数据做修改操作，因为视图是一张虚拟的表，它并不存储实际数据。如果想让视图不被修改，可以用with check option来完成限制。
create or replace view view_temp
as
    select * from temp
with check option;
 
修改视图：
alter view view_temp
as
    select id, name from temp;
 
删除视图：
drop view view_temp;
 
显示创建语法：
show create view v_temp;






































