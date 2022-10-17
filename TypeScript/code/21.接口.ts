/**
 * interface 只有规范，不能写实现
 */

{
  interface Animation {
    name: string;
    move(): void;
  }

  // 实现接口
  // 规范对象

  // interface 约束 函数
  interface Pay {
    (price: number): boolean;
  }

  const wePay: Pay = (price) => {
    return price > 0;
  };

  // 接口继承会合并父接口入子接口

  /**
   * type 和 interface 区别
   *   1. type 合并使用 & ，interface 合并使用继承（同名interface 自动合并）
   */
}
