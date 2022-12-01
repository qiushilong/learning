import 'package:flutter/material.dart';

class FavoritePage extends StatelessWidget {
  const FavoritePage({super.key});
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: const Text('详情'),
        ),
        body: ListView(
          scrollDirection: Axis.vertical,
        ));
  }
}
