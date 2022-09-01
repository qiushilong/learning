/*
    写入 Node 缓冲区的语法
    buf.write(string[,offset[,length][,encoding]])
    参数:
    string-写入缓存区的字符串
    offset-缓冲区开入写入的索引,默认为0
    length-写入的字节数,默认为buffer.length
    encoding-使用的编码,默认为utf-8
    返回值:
    返回实际写入的大小,如果buffer空间不足,则只会写入部分字符串

    根据 encoding 的字符编码写入 string 到 buf 中的 offset 位置。
    length 参数是写入的字节数。如果 buf 没有足够的空间保存整个字符串，
    则只会写入 string 的一部分。
    只部分解码的字符不会被写入。
*/

buf = Buffer.alloc(256);
len = buf.write("www.runoob.com");
console.log('写入字节数:' + len);