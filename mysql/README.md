# mysql


# 库


创建数据库

CREATE DATABASE database-name

删除数据库
drop database dbname

备份sql server
--- 创建 备份数据的 device
USE master
EXEC sp_addumpdevice 'disk', 'testBack', 'c:\mssql7backup\MyNwind_1.dat'
--- 开始 备份
BACKUP DATABASE pubs TO testBack





























