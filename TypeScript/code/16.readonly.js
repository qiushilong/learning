var Axios = /** @class */ (function () {
    function Axios() {
        this.site = "https://www.baidu.com";
    }
    return Axios;
}());
var instance = new Axios();
instance.site = "https://www.google.com"; // 无法分配到 "site" ，因为它是只读属性。ts(2540)
