{
    const EatDecorator: ClassDecorator = (target: Function) => {
        target.prototype.eat = () => {
            console.log('eat')
        }
    }

    const PlayDecorator: ClassDecorator = (target: Function) => {
        target.prototype.play = () => {
            console.log('play')
        }
    }

    @EatDecorator
    @PlayDecorator
    class Person {

    }

    const p: any = new Person();
    p.eat();
    p.play();
}