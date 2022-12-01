// 使用 throw 关键字抛出一个异常
// 使用 try 语句配合 on 或 catch（也可以同时使用）
import '2.变量.dart';
import 'dart:io';

Future<void> useTryCatch() async {
  try {
    for (final object in flybyObjects) {
      var description = await File('$object.txt').readAsString();
      print(description);
    }
  } on IOException catch (e) {
    print('Could not describe object: $e');
  } finally {
    flybyObjects.clear();
  }
}

void main() {}
