Object.keys(obj)  方法会返回一个由一个给定对象的自身可枚举属性组成的数组，数组中属性名的排列顺序和正常循环遍历该对象时返回的顺序一致 。



Object.getOwnPropertyNames(obj) 方法返回一个由指定对象的所有自身属性的属性名（包括不可枚举属性但不包括Symbol值作为名称的属性）组成的数组。



Reflect.ownKeys(obj) 返回一个由目标对象自身的属性键组成的数组。



obj.hasOwnProperty() 方法会返回一个布尔值，指示对象自身属性中是否具有指定的属性（也就是，是否有指定的键）。



Object.defineProperty(obj,propName,propValue) 方法会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性，并返回此对象。

