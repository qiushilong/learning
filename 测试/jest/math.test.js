const { add } = require('./math')

/**
 * 测试步骤：
 * 1. Arrange 准备测试数据：有时可以抽取到 beforeEach，或者 mock 模块
 * 2. Act     采取行动：调用相应的模块，执行对于的函数或者组件渲染方法
 * 3. Assest  断言：借助 Matchers 的能力，Jest 还可以扩展自己的 Matcher
 * 
 * Matcher：
 * .toBe(value): 强检测，要检测值和引用是否相同
 * .toEqual(value): 值检测，值相同即可
 * ...
 */

describe('math 模块', () => {
    test('1 + 2 = 3', () => {
        const number = 1;
        const anotherNumber = 2;
        const result = add(number, anotherNumber)
        expect(result).toEqual(3);
    })
})