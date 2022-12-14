# 我们在执行 shell 脚本时，可以向脚本传递参数，脚本内获取参数的格式为：$n。n 表示一个数字，1 为执行脚本的第一个参数，2 表示第二个参数，以此类推。

# 使用 /bin/sh demo.sh 1 2 3

echo "Shell 传递参数实例";
echo "执行的文件名：$0";
echo "第一个参数：$1";
echo "第二个参数：$2";
echo "第三个参数：$3";

# 传递到脚本的参数个数
echo "$#"

# 
echo "${*}"

# 当前进程 ID 号
echo "$$"

# 后台运行的最后一个进程的 ID 号
echo "$!"

echo "$@"

echo "$-"

echo "$?"
