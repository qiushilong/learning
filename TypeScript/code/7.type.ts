type userType = {
  name: string;
  age: number;
  sex?: number;
};

function addUser(user: userType): void {
  console.log("addUser");
}
function updateUser(user: userType): void {
  console.log("updateUser");
}

/**
 * type：起别名
 * type：可以是任何数据类型，如
 *   联合类型
 *   对象，函数...
 */
