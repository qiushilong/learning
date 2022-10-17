{
    var User = /** @class */ (function () {
        function User(name) {
            this._name = name;
        }
        Object.defineProperty(User.prototype, "name", {
            get: function () {
                return "name: ".concat(this._name);
            },
            set: function (name) {
                this._name = name + " changed";
            },
            enumerable: false,
            configurable: true
        });
        return User;
    }());
    var user = new User("zs");
    console.log(user.name);
    user.name = "ls";
    console.log(user.name);
}
