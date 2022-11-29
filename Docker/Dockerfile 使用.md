# Dockerfile 使用

## 步骤

1. 编写 Dockerfile 文件
2. 通过 Dockerfile 构建镜像
3. 通过镜像运行容器



## 编写 Dockerfile

```dockerfile
# 选择一个体积小的镜像 
FROM node:14-alpine

# 设置为工作目录，以下 RUN/CMD 命令都是在工作目录中执行
WORKDIR /code

# 把宿主机的代码添加到镜像中
ADD . /code

# 安装依赖
RUN yarn

# 暴露 docker 的端口
EXPOSE 3000

# 启动 Node Server
CMD npm start
```



## 构建镜像

```bash
# 构建一个名为 simple-app 的镜像
# -t: "name:tag" 构建镜像名称
docker build -t simple-app .

# git rev-parse --short HEAD: 列出当前仓库的 CommitId
# 也可将当前 Commit 作为镜像的 Tag
# 如果该前端项目使用 git tag 以及 package.json 中的 version 进行版本维护，也可将 version 作为生产环境镜像的 Tag
$ docker build -t simple-app:$(git rev-parse --short HEAD)
```



## 运行容器

```bash
# 根据该镜像运行容器
# 如果需要在后台运行则添加 -d 选项
# --rm: 当容器停止运行时，自动删除容器
# -p: 3000:3000，将容器中的 3000 端口映射到宿主机的 3000 端口，左侧端口为宿主机端口，右侧为容器端口
$ docker run --rm -p 3000:3000 simple-app
```



## 其他命令

```bash
# 查看镜像列表
docker images

# 查看运行中的容器
docker ps

# 关闭镜像
docker rmi 镜像id

# 关闭容器
docker rm 容器id
```



## 更高效的方式：docker-compose

编写 docker-compose.yaml

```bash
version: "3"
services:
  app:
    # build: 从当前路径构建镜像
    build: .
    ports:
      - 3000:3000
```

使用

```bash
# up: 创建并启动容器
# --build: 每次启动容器前构建镜像
 docker-compose up --build
```

