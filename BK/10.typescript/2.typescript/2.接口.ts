/** 直接描述 */
let option: { label: string; value: number } = { label: "小花", value: 1 };

/** 接口：提炼出来，可以复用 */
interface Option {
  label: string;
  value: number;
}
let option2: Option = { label: "小明", value: 2 };

/** 可选属性 */
interface Config {
  color?: string; // 使用?的属性是非必须属性，可加可不加
  width: number; // 不使用?的属性是必须属性，不添加时会报错
}
let config: Config = { width: 500 };

/** 只读属性 */
interface Point {
  readonly x: string; // 使用readonly修饰的属性定义后不能修改，否则报错
  readonly y: number;
}
let point = { x: 100, y: 100 }; // point的x，y不允许修改

/** 函数接口 */
interface SearchFunc {
  (source: string, subString: string): boolean;
}
// 函数名以及参数名可以于接口定义不同，参数类型对应即可
const mySearch: SearchFunc = function (src, sub) {
  return src.search(sub) > -1;
};

/** 可索引类型 */
// 暂时觉得无用，略

/** 任意其他类型 */
interface Props {
  color: string;
  [propName: string]: any; // [propName:string]: any; 允许定义其他任意数量的属性
}
let props: Props = { color: "green", a: 1, b: 2, c: 3 };

/** 类实现接口 */
interface ClockInterface {
  currentTime: Date;
  setTime(d: Date): void;
}
class Clock implements ClockInterface {
  // 类实现接口，接口的必须属性和方法都要有
  currentTime: Date;
  setTime(date: Date): void {
    this.currentTime = date;
  }
}

/** 类静态部分与实例部分的区别 */
// 未看，略

/** 接口继承接口，接口可以多继承 */
interface Shape {
  color: string;
}
interface Square extends Shape {
  // 相当于复制Shape的内容到Square
  sideLength: number;
}
let square: Square = { color: "blue", sideLength: 10 };

/** 混合类型 */
// 未看，略

/** 接口继承类 */
// 暂时觉得无用，略