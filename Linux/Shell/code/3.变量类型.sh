# number
num=100
echo ${num}

# string
# single quote
str='this is a string'
echo ${str}
:<<EOF 
单引号字符串的限制:
  1. 单引号里的任何字符都会原样输出，单引号字符串中插值（美元符号）变量是无效的。
  2. 单引号字符串不能出现单独的单引号（转义后也不行），但可以成对出现，作为字符串拼接使用。
EOF

# double quote
your_name="runoob"
str2="Hello, I Know you are \"$your_name\"!\n"
echo -e $str2

:<<EOF
双引号的优点：
  1. 双引号可以用变量。
  2. 双引号里可以使用转义字符。
EOF

# 字符串拼接
# 双引号拼接
greeting="hello,"$your_name"!"
greeting1="hello,${your_name}!"
echo $greeting $greeting1

# 单引号拼接
greeting2='hello,'$your_name'!'
greeting3='hello,${your_name}!'
echo $greeting2 $greeting3

# 获取字符串长度
string="abcd"
echo ${#string} # 4
# 变量为数组时，等价于下面的
echo ${#string[0]} # 4

# 提取子字符串
string="runoob is  a great site"
# 从第二个字符开始截取 4 个字符
echo ${string:1:4} # unoo

# 查找子字符串
string="runoob is  a great site"
# 查找字符 i 或 o 的位置（哪个字母先出现就计算那个）
echo `expr index "$string" io` # 4


# 数组（bash 只支持一维数组，从 1 开始）
array=(1 2 3 4)

# 读取数组
echo $array[1] # 1 

