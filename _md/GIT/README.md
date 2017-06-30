# Git 学习资源



## 常用命令

### 初始化
```
$ git init
Initialized empty Git repository in /Users/nimojs/Documents/git/.git/
```

### 添加文件
```
$ git add README.md
```
添加当前目录及子目录中的文件
```
$ git add .
```
### 查看状态
```
$ git status
On branch master

Initial commit

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)

    new file:   README.md
```

### 提交
```
$ git commit -m "增加 README.md 文件"
[master (root-commit) 0949f17] 增加 README.md 文件
 1 file changed, 99 insertions(+)
 create mode 100644 README.md
```

### 配置提交作者信息

```
$ git config user.name ""
$ git config user.email ""
```
设置全局作者
```
$ git config user.name --global ""
$ git config user.email --global ""
```
移除设置
```
$ git config --unset --global user.email
// 全局的
$ git config --unset user.email
// 非全局的
```
### 查看日志

```
$ git log 
```
查看最近一次提交的详细日志
```
$ git show
```
查看指定详细日志
```
$ git show e9d2eeffd50ffb5099ea325cbacf355d19a8b059
```
> 查看日志时候可按 shift + q 退出终端

### 查看差异
指定两个版本号，查看差异
```
$ git diff 3c52d3f8ddb1ea0da4b35c7e9aac1125ee82a806 \
         cfb49c657b8d821c3dc258a0b2b86659923f2fcf
```

### 删除文件

```
$ git rm some.html
rm 'some.html'
```

### 删除索引中的文件（不会删除文件，但会删除 git 中的记录）

```
git rm --cached some.html
```

### 文件重命名

```
$ git mv some.html foo.html
```

### 创建版本库副本
```
$ cd ..
// 切换至 当前项目上级目录
$ git clone git foo
```