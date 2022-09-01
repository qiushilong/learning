//提供对象
function Hello() {
    var name;
    this.setName = function (tName) {
        name = tName;
    };
    this.sayHello = function () {
        console.log('Hello ' + name);
    };
};
module.exports = Hello;