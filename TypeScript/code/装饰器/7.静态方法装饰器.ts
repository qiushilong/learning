{
    const showDecorator: MethodDecorator = (target: Object, propertyKey: string | symbol, descriptor: PropertyDescriptor) => {
        console.log(target) // 方法本身
        console.log(propertyKey) // 方法属性
        console.log(descriptor)
    }

    class User {
        @showDecorator
        public static show() {
            console.log('xxx')
        }
    }

    User.show()
}