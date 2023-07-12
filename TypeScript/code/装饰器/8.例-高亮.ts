{
    const hightlightDecorator: MethodDecorator = (target: Object, propertyKey: string | symbol, descriptor: PropertyDescriptor) => {
        console.log('descriptor', descriptor)
        const method = descriptor.value;
        descriptor.value = () => {
            return `<div style="color: red;">${method()}</div>`
        }
    }

    class User {
        @hightlightDecorator
        public response() {
            return 'xxx'
        }
    }

    new User().response()
}