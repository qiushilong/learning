# HTTP

HTTP (Hyper Text Transfer Protocol)，超文本传输协议。

在前端最重要的体现在于，浏览器（HTTP Client）与服务器（HTTP Server）之间的通信。

HTTP 是前后端沟通的桥梁，了解 HTTP 协议及报文相当重要。



## HTTP 报文

```bash
# 请求报文
# 每一行结尾是 \r\n

# 首行 --- 请求方式 路径 请求协议
GET / HTTP/1.1

# 请求头
Host: www.baidu.com
User-Agent: curl/7.79.1
Accept: */*

# 请求体 
# ...
```

```bash
# 响应报文

# 首行 --- 请求协议 状态码 状态描述符
HTTP/1.1 200 OK

# 响应头
Accept-Ranges: bytes
Cache-Control: private, no-cache, no-store, proxy-revalidate, no-transfrom
Connection: keep-alive
Content-Length: 2443
Content-Type: text/html
Date: Wed, 31 Aug 2022 09:23:42 GMT
Etag: "58860402-98b"
Last-Modified: Mon, 23 Jan 2017 13:24:18 GMT
Pragma: no-cache
Server: bfe/1.0.8.18
Set-Cookie: BDORZ=27315; max-age=86400; domain=baidu.com; path=/

# 响应体
<!DOCTYPE html>
...
```



## 请求头

| 名称              | 意义                                                        |
| ----------------- | ----------------------------------------------------------- |
| Accept            | 浏览器可接受的 MIME 类型                                    |
| Accept-Charset    | 浏览器可接受的字符集                                        |
| Accept-Encoding   | 浏览器能够进行解码的数据编码方式（gzip，deflate，br）       |
| Accept-Language   | 浏览器希望的语言种类                                        |
| Authorization     | 授权信息                                                    |
| Connection        | 表示是否需要持久连接                                        |
| Content-Length    | 表示请求消息正文的长度                                      |
| Cookie            |                                                             |
| Host              | 初始化 URL 中的主机和端口                                   |
| If-Match          |                                                             |
| If-Modified-Since |                                                             |
| If-None-Match     |                                                             |
| If-Range          |                                                             |
| Referer           | 包含一个 URL，用户从该 URL 代码的界面出发访问当前请求的页面 |
| User-Agent        | 浏览器类型                                                  |



## 响应头
                                                                                                      
