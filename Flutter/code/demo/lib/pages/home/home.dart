import 'package:flutter/material.dart';
import 'package:demo/fakeData/food.dart';
import 'package:demo/fakeData/daily.dart';

class HomePage extends StatefulWidget {
  const HomePage({super.key});
  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  String selectValue = 'food';
  var dataList = foodList.sublist(0, 10);

  void changeSelectValue(String value) {
    var newDateList;
    switch (value) {
      case 'daily':
        newDateList = dailyList;
        break;
      default:
        newDateList = foodList;
    }
    setState(() {
      selectValue = value;
      dataList = newDateList.sublist(0, 10);
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: const Text('首页'),
        ),
        body: ListView(
          scrollDirection: Axis.vertical,
          children: [
            Nav(
              selectValue: selectValue,
              changeSelectValue: changeSelectValue,
            ),
            List(dataList: dataList)
          ],
        ));
  }
}

class Nav extends StatelessWidget {
  final selectValue;
  final changeSelectValue;

  Nav({Key? key, this.selectValue, this.changeSelectValue}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    var width = MediaQuery.of(context).size.shortestSide / 4;

    return Container(
      height: 40,
      color: Colors.grey[300],
      child: ListView(
        scrollDirection: Axis.horizontal,
        children: [
          InkWell(
            onTap: () {
              changeSelectValue('food');
            },
            child: Container(
                width: width,
                child: Center(
                  child: Text(
                    '美食',
                    style: TextStyle(
                        color:
                            selectValue == 'food' ? Colors.blue : Colors.black),
                  ),
                )),
          ),
          InkWell(
            onTap: () {
              changeSelectValue('daily');
            },
            child: Container(
                width: width,
                child: Center(
                  child: Text(
                    '日用',
                    style: TextStyle(
                        color: selectValue == 'daily'
                            ? Colors.blue
                            : Colors.black),
                  ),
                )),
          ),
          InkWell(
            onTap: () {
              changeSelectValue('flower');
            },
            child: Container(
                width: width,
                child: Center(
                  child: Text(
                    '花植',
                    style: TextStyle(
                        color: selectValue == 'flower'
                            ? Colors.blue
                            : Colors.black),
                  ),
                )),
          ),
          InkWell(
            onTap: () {
              changeSelectValue('health');
            },
            child: Container(
                width: width,
                child: Center(
                  child: Text(
                    '保健',
                    style: TextStyle(
                        color: selectValue == 'health'
                            ? Colors.blue
                            : Colors.black),
                  ),
                )),
          ),
        ],
      ),
    );
  }
}

class List extends StatelessWidget {
  final dataList;
  List({Key? key, this.dataList}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    double width = MediaQuery.of(context).size.shortestSide;

    return Container(
        child: Column(
      children: [
        Row(children: [
          for (int i = 0; i < 2 && i < dataList.length; i++)
            Card1(
                dataList[i]['name'] as String,
                width / 2,
                double.parse(dataList[i]['price'].toString()),
                AssetImage(dataList[i]['url'].toString()))
        ]),
        for (int i = 2; i < dataList.length; i++)
          Card2(
              dataList[i]['name'] as String,
              width,
              double.parse(dataList[i]['price'].toString()),
              AssetImage(dataList[i]['url'].toString())),
      ],
    ));
  }
}

class Card1 extends StatelessWidget {
  String name;
  double width;
  double price;
  var img;

  Card1(this.name, this.width, this.price, this.img) {
    name = this.name;
    width = this.width;
    price = this.price;
    img = this.img;
  }

  @override
  Widget build(BuildContext context) {
    return Container(
      width: width,
      height: 200,
      child: Column(children: [
        InkWell(
          onTap: () {
            Navigator.of(context).pushNamed('/favorite');
          },
          child: Image(image: img, width: width),
        ),
        Row(
          children: [Text(name), Text('￥$price')],
        ),
        Row(
          children: [Text('当日午餐'), Text('次日午餐'), Text('次日晚餐')],
        ),
        Row(
          children: [
            Text('收藏至礼品库'),
          ],
        ),
        Row(
          children: [Text('用礼金兑换'), Text('送给 TA')],
        ),
      ]),
    );
  }
}

class Card2 extends StatelessWidget {
  String name;
  double width;
  double price;
  var img;

  Card2(this.name, this.width, this.price, this.img) {
    name = this.name;
    width = this.width;
    price = this.price;
    img = this.img;
  }

  @override
  Widget build(BuildContext context) {
    return Container(
      width: width,
      // height: 200,
      child: Row(children: [
        InkWell(
          onTap: () {
            Navigator.of(context).pushNamed('/favorite');
          },
          child: Image(image: img, width: width / 2),
        ),
        Column(
          children: [
            Row(
              children: [Text(name), Text('￥$price')],
            ),
            Row(
              children: [Text('当日午餐'), Text('次日午餐'), Text('次日晚餐')],
            ),
            Row(
              children: [
                Text('收藏至礼品库'),
              ],
            ),
            Row(
              children: [Text('用礼金兑换'), Text('送给 TA')],
            ),
          ],
        )
      ]),
    );
  }
}
