# Server Send Events

Server Send Events 规范描述了一个内建的 **EventSource**，它能保持与服务器的连接，并允许从中接收事件。

与 WebSocket 类似，其连接是持久的。

区别：

| WebSocket                        | EventSource            |
| -------------------------------- | ---------------------- |
| 双向：客户端和服务端都能交换消息 | 单向：仅服务能发送消息 |
| 二进制和文本数据                 | 仅文本数据             |
| WebSocket 协议                   | 常规 HTTP 协议         |

与 WebSocket 相比， EventSource 是与服务器通信的一种不那么强大的方式。

之所以使用它：简单。在很多应用中， WebSocket 有点大材小用。

我们需要**从服务器接收一个数据流**：可能是聊天消息或者市场价格等。这正是 EventSource 所擅长的。它还支持**自动重新连接**，而在 WebSocket 中这个功能 需要我们手动实现。此外，它是一个**普通的旧的 HTTP**，不是一个新协议。



## 获取消息

要开始接收消息，我们只需要创建 new EventSource(url) 即可。浏览器将会连接到 url 并保持连接打开，等待事件。

服务器响应状态码应该为 200，header 为 Content-Type: text/eventstream ，然后保持此连接并以一种特殊的格式写入消息，就像这样：

```json
data: Message 1
data: Message 2
data: Message 3
data: of two lines
```

- data：后为消息文本，冒号后的空格是可选的。
- 消息以双换行符 \n\n 分隔。
- 要发送一个换行 \n，我们可以在要换行的位置立即再发送一个 data：（上面的第三条信息）。

在实际开发中，复杂的消息通常是用 JSON 编码后发送。换行符在其编码中为 \n，因此不需要多行 data: 消息。

例如：

```json
data: {"user":"John","message":"First line\n Second line"}
```

……因此，我们可以假设一个 data: 只保存了一条消息。

对于每个这样的消息，都会生成 message 事件：

```js
let eventSource = new EventSource('/events/subscribe');

eventSource.onmessage = function(event) {
  console.log('New message', event.data);
}
```

