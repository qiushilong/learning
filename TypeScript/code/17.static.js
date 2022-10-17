{
    var Axios = /** @class */ (function () {
        function Axios() {
        }
        Axios.site = "site";
        return Axios;
    }());
    var instance = new Axios();
    console.log(instance.site); // 属性“site”在类型“Axios”上不存在。你的意思是改为访问静态成员“Axios.site”吗?ts(2576)
    console.log(Axios.site);
}
