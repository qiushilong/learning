type accountType = {
  account: string;
  password: string;
  [propName: string]: any; // 剩余任何属性都能接受，且不报错
};
