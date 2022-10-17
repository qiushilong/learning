/**
 * in 用于遍历接口或联合类型的属性
 */

type USER = { name: string; age: number };

type MEMBER<T> = {
  [K in keyof T]: T[K];
};

const per: MEMBER<USER & { address: string }> = {
  name:'zs',
  age:12,
  address:'sz'
};
