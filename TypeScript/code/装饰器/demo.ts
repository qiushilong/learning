{
    function log(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        let originalMethod = descriptor.value; // 保存原来的方法
    
        // 重写原来的方法
        descriptor.value = function(...args: any[]) {
            console.log(`Called ${propertyKey} with: `, args.join(", "));
            let result = originalMethod.apply(this, args); // 调用原来的方法
            console.log(`Method result: ${result}`);
            return result; // 返回结果
        }
    
        return descriptor;
    }
    
    class Math {
        @log
        add(a: number, b: number) {
            return a + b;
        }
    }
    
    let math = new Math();
    math.add(2, 3);
    
}