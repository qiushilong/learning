var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.push(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.push(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
var _this = this;
// 类装饰器表达式会在运行时作为函数被调用，类的构造函数作为其唯一的值
function sealed(constructor) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}
var Greeter = function () {
    var _classDecorators = [sealed];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var Greeter = _classThis = /** @class */ (function () {
        function Greeter_1(message) {
            this.greeting = message;
        }
        Greeter_1.prototype.greet = function () {
            return "Hello, " + this.greeting;
        };
        return Greeter_1;
    }());
    __setFunctionName(_classThis, "Greeter");
    (function () {
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name }, null, _classExtraInitializers);
        Greeter = _classThis = _classDescriptor.value;
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Greeter = _classThis;
}();
// 当 @sealed 被执行的时候，它将密封此类的构造函数和原型
// Object.seal https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/seal
// 重载构造函数
function classDecorator(constructor) {
    return /** @class */ (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.newProperty = "new property";
            _this.hello = "override";
            return _this;
        }
        return class_1;
    }(constructor));
}
var Greeter2 = function () {
    var _classDecorators_1 = [classDecorator];
    var _classDescriptor_1;
    var _classExtraInitializers_1 = [];
    var _classThis_1;
    var Greeter2 = _classThis_1 = /** @class */ (function () {
        function Greeter2_1(m) {
            this.property = "property";
            this.hello = m;
        }
        return Greeter2_1;
    }());
    __setFunctionName(_classThis_1, "Greeter2");
    (function () {
        __esDecorate(null, _classDescriptor_1 = { value: _classThis_1 }, _classDecorators_1, { kind: "class", name: _classThis_1.name }, null, _classExtraInitializers_1);
        Greeter2 = _classThis_1 = _classDescriptor_1.value;
        __runInitializers(_classThis_1, _classExtraInitializers_1);
    })();
    return Greeter2 = _classThis_1;
}();
console.log('new Greeter("world")', new Greeter2("world"));
