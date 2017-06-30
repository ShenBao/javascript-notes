#Git 笔记
##说明
>`<file>` : 文件  
`<branch>` : 本地分支名称  
`<rembra>` : 远程分支名称  
`<commit>` : 提交记录的 hash 值  
`<remote>` : 远程主机名  

##`git init`
>###把当前目录变成 git 可以管理的仓库

##`git add`
###操作说明
>`git add <.|<file>...>` : 把文件添加到仓库

##`git commit`
###操作说明
>`git commit -m <message>` : 把文件提交到仓库

##`git log`
###操作说明
>`git log <file1>[ <file2>...]` : 查看文件或文件夹的提交记录  
`git log <branch> --` : 分支的提交记录  
`git log -- <file>` : 文件的提交记录  
`git log <branch> -- <file>`  
`git log <commit>` -- : `<commit>` 之前的记录，包含此条  
`git log <commit1> <commit2>` : `<commit1>` 与 `<commit2>` 之间的记录  
`git log <commit1>..<commit2>` : `<commit1>` 与 `<commit2>` 之间的记录，不包括 `<commit1>`

####参数说明
>`--oneline` - 单行输出  
`--pretty=format:"%H %h %T %t %P %p %an %ae %ad %ar %cn %ce %cd %cr %s"` : 自定义格式输出  
`-N` : 最近 N 次的提交记录  
`--abbrev-commit` : 仅显示 SHA-1 的前几个字符  
`--mergs` : 查看所有合并过的提交历史记录  
`--no-merges` : 查看所有未被合并过的提交信息  
`--grep=<message>` : 过滤只包含 `<message>` 提交说明的记录  
`--since=""|--after=""` : 显示指定时间之后的提交(不包含当前日期)  
`--until=""|--before=""` : 显示指定时间之前的提交(包含当前日期)  
`--author=<author>` : 查询指定作者的提交记录

####示例
```
git log --since="2016-1-1"
git log --since="yesterday"
git log --pretty=format:"%cn committed %h on %cd"
git log -3
```  

##`git remote`
###操作说明
>`git remote rename <old> <new>`: 重命名  
`git remote remove <name>`: 删除  
`git remote [-v | --verbose] show [-n] <name>…`: 显示远程连接的详细信息  
`git remote add [-f] [--[no-]tags] <name> <url>`: 添加远程对应关系

####参数说明
>`-v`|`--verbose`: 较多显示信息  
`-f`: 远程对应关系完毕后立即执行 `git fetch <name>`  
`--[no-]tags`: 执行 `git fetch <name>` 时是否导入书签

##`git push`
###操作说明
>`git push <remote> <branch>:<rembra>` : 将本地分支的更新，推送到远程主机  
`git push <remote> <branch>` : 将本地分支推送与之存在”追踪关系”的远程分支(通常两者同名)，如果该远程分支不存在，则会被新建  
`git push <remote> :<rembra>` : 删除指定的远程分支  
`git push <remote> --delete <rembra>` : 删除指定的远程分支

##`git fetch`
###操作说明
>`git fetch [<options>] [<repository>]`: 从远程仓库获取更新

####参数说明
>`-v`|`--verbose`: 较多显示信息  
`--progress`: 显示进度  
`-n`|`--no-tags`: 不下载标记  
`-t`|`--tags`: 下载标记

##`git pull`
###操作说明
>`git pull <remote> <rembra>:<branch>` : 取回远程主机某个分支的更新，再与本地的指定分支合并。  
`git pull <remote> <rembra>` : 远程分支是与当前分支合并  
`git pull <remote>` : 当前分支与存在追踪关系的远程分支合并

##`git branch`
###操作说明
>`git branch <branch>` : 创建分支  
`git branch -d|-D <branch>` : 删除分支  
`git branch --set-upstream <branch> <remote>/<rembra>` : 本地分支与远程分支建立追踪关系

##`git rm`
###操作说明
>`git rm --cached <file>` : 从暂存区删除文件，工作区则不做出改变

##`git reset`
###操作说明
>`git reset [<commit>] [--] [<file>...]` : 用指定 `<commit>` 全部或部分文件替换暂存区，不影响工作区  
`git reset [--hard|--soft|--mixed] [<commit>]` : 替换文件且重置引用  

####参数说明
>`--hard` : 重置引用，替换暂存区，替换工作区  
`--soft` : 只更改引用的指向，不改变暂存区和工作区  
`--mixed`（默认） : 更改引用的指向及重置暂存区，但是不改变工作区  
`-q` : Be quiet, only report errors.

##`git checkout`
###操作说明
>`git checkout <branch>` : 切换分支，工作区更改保留  
`git checkout -b|-B <branch>` : 创建并切换到创建的分支  
`git checkout .` : 用暂存区全部文件替换工作区  
`git checkout -- <file>` : 用暂存区指定的文件替换工作区  
`git checkout <commit> .` : 用指定分支的全部文件替换暂存区和工作区  
`git checkout <commit> <file>` : 用指定分支的部分文件替换暂存区和工作区

###参数说明
>`-b` : 创建分支  
`-B` : 分支不存在时才创建

##`git diff`
###操作说明
>`git diff [--options] [--] [<path>…]` : 比较工作区与暂存区的差异  
`git diff [--options] <commit> [--] [<path>…]` : 工作区和版本库的差异  
`git diff [--options] --cached [<commit>] [--] [<path>…]`: 暂存区与版本库之间的差异  
`git diff [--options] <commit> <commit> [--] [<path>…]`: 两个版本库之间的差异  
`git diff --no-index [--options] [--] [<path>…]`: 两个文件的差异，当其中一文件在工作区之外 `--no-index` 可省略

##`git stash`
###操作说明
>`git stash list`: 列举所有的存储结点  
`git stash drop [-q|--quiet] [<stash>]`: 删除指定存储结点或第一个  
`git stash pop [--index] [-q|--quiet] [<stash>]`: 
`git stash apply [--index] [-q|--quiet] [<stash>]`: 

##`git config`
###操作说明
>`git config [<options>] name`: 读取配置  
`git config [<options>] name [value]`: 设置配置

###参数说明
>`--global`: 全局设置  
`--list`: 查看配置文件中的所有配置  
`--get`: 获取配置
