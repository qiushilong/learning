# 变量定义
# 1. 变量名由字母，数组，下划线组成，数字不能开头
# 2. 变量名不能是关键字
# 3. 空格两边不能打空格
your_name="xiaoming"

# 打印 your_name 方式1
echo your_name 

# 打印 your_name 方式2（推荐）
echo ${your_name} 

# 只读变量
myUrl="https://www.google.com"
readonly myUrl

# 再次设置 myUrl
# myUrl="https://www.runoob.com" # myUrl: readonly variable

# 删除变量
# unset myUrl # unset: myUrl: cannot unset: readonly variable

unset your_name
echo ${your_name} # 输出空行

:<<EOF
  运行 shell 时，会同时存在三种变量：
    1. 局部变量：局部变量在脚本或命令中定义，仅在当前 shell 实例中有效，其他 shell 启动的程序不能访问局部变量。
    2. 环境变量：所有的程序，包括 shell 启动的程序，都能访问环境变量，有些程序需要环境变量来保证其运行正常。必要的时候 shell 脚本也可以定义环境变量。
    3. shell变量：shell变量 是由 shell程序 设置的特殊变量。shell 变量中有一部分是环境变量，有一部分是局部变量，这些变量保证了 shell 的正常运行。
EOF