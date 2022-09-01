## 本地操作

##### 初始化一个本地仓库

git init



##### 放弃更改

git checkout .



##### 提交所有更改内容到暂存区

git add .



##### 提交暂存区的内容到本地仓库

git commit -m"提交信息"



##### 查看文件状态

git status



##### 查看更改日志

git log



##### 查看简洁日志

git log --pretty=oneline



##### 回到指定版本

git reset --hard 版本号



##### 取消工作区的修改,回到上一个版本

git check -- 文件



##### 把暂存区的修改退回到工作区

git reset HEAD 文件



##### 连接远程仓库

git remote add origin http路径



##### 删除远程仓库

git remote rm origin



## 远程操作

##### 把远程仓库拉到本地

git pull origin master

`git pull` 命令基本上就是 `git fetch` 和 `git merge` 命令的组合体，Git 从指定的远程仓库中抓取内容，然后马上尝试将其合并进你所在的分支中。

--allow-unrelated-histories



##### 把本地仓库推送到远程仓库

git push origin master



##### 克隆仓库

git clone +远程地址



## 分支操作

##### 查看分支

git branch



##### 创建分支

git branch 分支名



##### 切换分支

git checkout 分支名

git switch 分支名



##### 创建+切换分支

git check -b 分支名

git switch -c 分支名



##### 合并指定分支到当前分支

git merge 指定分支



##### 删除分支

git branch -d 分支名



##### 本地分支推送到远端

切换到要推送的分支

git push -u origin 远端分支名



## 协同开发流程

1.每次开发一个新功能都要新建一个分支

```git
git switch -c newbranch
```

2.开发完成后,提交开发的新内容到newbranch

```git
git add .

git commit -m'信息'
```

3.切换到主分支

```git
git checkout master
```

4.主分支合并新分支

```git
git marge newbranch
```

5.远程推送master

```git
git push origin master
```

6.如果需要推送newbranch到远程

```git
git checkout newbranch

git push -u origin '远程分支名'
```



