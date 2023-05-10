const isString = (x: unknown): x is string => {
  return typeof x === "string";
};

/**
 * x is string 表示如果函数返回值为 true，则 x 为 string 类型
 */

// 一般都是
const isString2 = (x: any): boolean => {
  return typeof x === "string";
};


type Fish = {
  swim: true;
}

type Bird = {
  fly: true;
}

function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}