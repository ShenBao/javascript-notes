GIT教程 - GIT常用命令

# 查看命令的帮助
git

# 查看子命令的帮助
git <子命令> -h

# 例如查看 config 子命令的帮助
git config -h

# 克隆仓库
git clone <地址>

# 新建一个跟踪分支（上游分支）
#
# 一般克隆一个仓库的时候，会自动新建一个 master 的分支跟踪远程的默认分支（通常是 origin/master）
# 想跟踪其他远程分支需要我们自己新建
git checkout --track <remote name>/<branch name>

# 新建仓库
#
# 这个命令会在当前目录生成 .git 文件夹，
# 注意这个文件夹不能删除，里面的文件也不要去动它，就让它们静静地躺在那里
git init

# 跟踪文件
git add <filename>

# 例如跟踪当前目录下的 README.md 文件
git add README.md

# 提交
git commit -m '提交日志'

# 查看提交记录
git log

# 查看简洁的提交记录
git log --oneline

# 查看状态
#
# 这个命令是用得最频繁的，没有之一
git status

# 从最近的提交中检出某个文件
git checkout <filename>

# 例如检出 README.md 文件
git checkout README.md

# 从某个提交中检出某个文件
#
# 设某提交的id为 5cf2980 那么下面的命令可以从这次提交检出某文件，假设检出 README.md 文件
git checkout README.md 5cf2980

# 查看配置
#
# git 的配置分三份文件 分别是 global 全局配置 system 系统配置 local 本地配置
# 全局配置是针对各个仓库都适用的
# 系统配置本人截至教程发稿还没学习，这里就不介绍
# 本地配置是只当前仓库的配置，这个配置文件保存在 .git 文件夹中，一般情况下都是配置这个文件的
# 下面这条命令是以上三个配置文件合成的。就是说相同配置项的，本地优先级最高，系统次之，全局优先级最低
git config --list

# 查看全局配置
git config --global --list

# 查看系统配置
git config --system --list

# 查看本地配置
git config --local --list

# 设置配置项
#
# 不加 --global --system --local 这些选项，默认是配置本地的
git config <配置项> <配置值>

# 如配置 user.name
git config user.name allowing

# 全局配置 user.name
git config --global user.name allowing

# 本地配置 默认不加 --local 选项的话，就是配置本地的，所以下面的 --local 可以省略
git config --local user.name allowing

# 新建分支
git branch <branch name>

# 例如新建 allowing 分支
git branch allowing

# 切换到新建的分支
git checkout <branch name>

# 例如切换到 allowing 分支
git checkout allowing

# 基于某个提交点新建分支
#
# 一般在又想从头构建一个系统时，会想从零新建一个分支，这时这个命令就很有用了
# 设某提交 id 为 5cf2980，新建 allowing 分支
git branch allowing 5cf2980

# 配置远端仓库地址
git remote add <起个名称> <远端仓库地址>

# 设远端仓库地址 git@git.oschina.net:allowing/class001-homework.git
git remote add origin git@git.oschina.net:allowing/class001-homework.git

# 同步本地仓库到远端
git push <刚刚起的远端仓库名称> <本地分支名>

# 如同步本地仓库的 master 分支到远程
git push origin master

# 拉取远端 origin 仓库的 master 分支，并和本地仓库的同名分支合并
git pull origin/master

# 获取某个远程仓库的地址，例如获取 origin 的地址
git remote get-url origin

# 查看所有可用子命令列表
git help -a

# 调出 git gui
git gui

# 查看不同(diff)
git diff

# 针对某个文件查看不同，例如：foo/bar/index.php 文件
git diff foo/bar/index.php