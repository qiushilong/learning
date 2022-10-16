var Sex;
(function (Sex) {
    Sex[Sex["Boy"] = 0] = "Boy";
    Sex[Sex["Girl"] = 1] = "Girl";
})(Sex || (Sex = {}));
console.log(Sex.Boy, Sex.Girl);
