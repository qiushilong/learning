import 'package:flutter/material.dart';
import 'package:demo/pages/home/home.dart';
import 'package:demo/pages/favorite/favorite.dart';

void main() {
  runApp(
    const MyApp(),
  );
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
          brightness: Brightness.light, primaryColor: Colors.blueGrey),
      routes: <String, WidgetBuilder>{
        '/': (BuildContext context) {
          return const HomePage();
        },
        '/favorite': (BuildContext context) {
          return const FavoritePage();
        }
      },
    );
  }
}
