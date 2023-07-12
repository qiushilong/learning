const moveDecorator: ClassDecorator = (target: Function) => {
    console.log(target) // 类传递过来的是构造函数
    target.prototype.getPosition = (): { x: number, y: number } => {
        return { x: 100, y: 200 }
    }
}

@moveDecorator
class Tank {
    getPosition() { }
}

const t = new Tank();
console.log(t.getPosition())

@moveDecorator
class Player {
    getPosition() { }
}

const p = new Player();
console.log(p.getPosition())