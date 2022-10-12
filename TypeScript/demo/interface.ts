// 接口描述了类的公共部分，而不是公共和私有两部分。它不会帮你检查类是否具有某些私有成员。

interface ClockInterface {
	currentTime: Date;
}

class Clock implements ClockInterface{
	currentTime: Date;
}