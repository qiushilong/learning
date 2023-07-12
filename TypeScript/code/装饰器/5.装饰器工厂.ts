const MusicDecoratorFactory = (s: string): ClassDecorator => {
    return (target: Function) => {
        target.prototype.playMusic = (): void => {
            console.log(`${s} 播放音乐`)
        }
    }
}

@MusicDecoratorFactory('man')
class Man {

}

new Man().playMusic()

@MusicDecoratorFactory('woman')
class Woman {

}

new Woman().playMusic()