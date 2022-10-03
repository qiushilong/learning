/**
 * 深浅拷贝：
 * 浅拷贝：只拷贝一层，如对象的属性是对象的情况，指向相同。
 * 深拷贝：完全的新对象。
 * 
 * 
 * 浅拷贝：
 *   1. Object.assign()
 *   2. {...obj}
 *   3. arr.concat()
 * 
 * 深拷贝
 *   1. JSON.parse(JSON.stringify())
 *   2. lodash.deepClone()
 */