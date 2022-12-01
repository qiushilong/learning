// async 和 await 关键字可以让你避免回调地狱，提高代码可读性。
import 'dart:io';

import '15.类.dart';

const oneSecond = Duration(seconds: 1);

Future<void> printWithDelay(String message) async {
  await Future.delayed(oneSecond);
  print(message);
}

// 上面的方法相当于
Future<void> printWithDelay2(String message) {
  return Future.delayed(oneSecond).then((_) {
    print(message);
  });
}

// 如下一个示例所示，async 和 await 关键字有助于使代码变得易于阅读。
Future<void> createDescriptions(Iterable<String> objects) async {
  for (final object in objects) {
    try {
      var file = File('$object.txt');
      if (await file.exists()) {
        var modified = await file.lastModified();
        print('File for $object already exists. It was modified on $modified');
        continue;
      }
      await file.create();
      await file.writeAsString('Start describing $objects in this file');
    } on IOException catch (e) {
      print('Cannot create description for $object : $e');
    }
  }
}

// 也可以使用 async* 关键字，提供一个可读性更好的方式去生成 Stream
Stream<String> report(Spacecraft craft, Iterable<String> objects) async* {
  for (final object in objects) {
    await Future.delayed(oneSecond);
    yield '${craft.name} files by $object';
  }
}
