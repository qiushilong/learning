开始下载步骤，无需任何准备工作，简单明了。
\#下载并安装yum repository



```
[root@localhost ~]# wget -i -c http://dev.mysql.com/get/mysql57-community-release-el7-10.noarch.rpm
[root@localhost ~]# yum -y install mysql57-community-release-el7-10.noarch.rpm
```

\#安装mysql服务器

```
rpm --import https://repo.mysql.com/RPM-GPG-KEY-mysql-2022 # 更新 mysql GPG
[root@localhost ~]# yum -y install mysql-community-server
```



\#你已完成百分之五十的工作量，接下来的工作量就是开启服务，并修改初始化密码以及删除yum操作自动

\#更新包

\#启动mysql服务

```
[root@localhost ~]# systemctl start mysqld.service
```

\#查看是否已启动——状态（Active：active（running））

```
[root@localhost ~]# systemctl status mysqld.service
```

\#查看mysqld日志并用初始化密码登录——root@localhost:系统会自动默认匹配初始化密码

```
[root@localhost ~]# grep "password" /var/log/mysqld.log
[root@localhost ~]# mysql -u root -p
```

\#输入初始化密码登录

\#需修改初始化密码才能使用mysql数据库

\#修改密码规则如下：密码中必须包含大小写字母数字及符号——提供参照密码‘tyzZ001!’

mysql> ALTER USER 'root'@'localhost' IDENTIFIED BY '新密码';#把tyzZ001!替换新密码，此后tyzZ001!就是登录密码

\#因安装了Yum Repository，每次使用yum操作时都会自动更新，所以需把它卸载掉：

```
[root@localhost ~]# yum -y remove mysql57-community-release-el7-10.noarch
```

\#到此已完成安装和简单的使用mysql工作。

\#mysql常用[命令](https://www.linuxcool.com/)

```
[root@localhost ~]# systemctl start mysqld.service #开启服务
[root@localhost ~]# systemctl stop mysqld.service #关闭服务
[root@localhost ~]# systemctl status mysqld.service #查看服务状态
[root@localhost ~]# mysql -u root -p #进入mysql命令窗口
mysql> show databases; #查看所有数据库
mysql> use 数据库名; #使用该数据进行编辑
mysql> show tables; #查看某数据库所有表
```