webp是谷歌开发的一个图片格式，跟普通的jpg比起来，如果同大小的图片情况下，webp会比较清晰。

火狐也开始支持webp格式，所以以后webp就是前端的趋势。但是ie浏览器不支持，这里需要做兼容考虑。

下载：[webp](https://jskoa.com/wp-content/uploads/2018/10/webp.zip)

 

HTML:

```
<script type="text/javascript" src="WebP.js"></script>

<img src="http://www.etherdream.com/WebP/Test.webp" />
```

 

案例以及来源：http://www.etherdream.com/WebP/

 

在线转换webp：https://www.upyun.com/webp

 

其他方法兼容：

#### 姿势一： <picture>标签

<picture>是HTML5中的一个新标签，类似< video>它也可以指定多个格式的资源，由浏览器选择自己支持的格式进行加载。

```html
<picture class="picture">
  <source type="image/webp" srcset="image.webp">
  <img class="image" src="image.jpg">
</picture>
```

如果浏览器支持WebP格式，就会加载image.webp，否则会加载image.jpg。

即使浏览器不支持<picture>标签，图片仍然会正常显示，只是CSS可能无法正确选取到picture元素。比如在IE8中，下面的CSS就不会起作用：

```
.picture img {
  width: 100px;
  height: 100px;
}
```

但是可以这样来给图片写样式：

```
.image {
  width: 100px;
  height: 100px;
}
```

即使浏览器使用的是WebP格式的图片，最终还是会应用img元素的样式。

不过只要使用了[html5shiv](https://github.com/aFarkas/html5shiv)，使旧的浏览器支持这个标签，CSS选择器就可以正常使用了。

这种方法是最简单的，但是不能作用于CSS中的图片（如背景）。

 

 

#### 姿势二：使用JS替换图片的URL。

我们有很多的页面往往会用到图片的“懒加载”——通常是把图片的URL放在img元素的一个自定义属性中，然后用JS在适当的时机将URL赋值给src属性。用类似的原理，我们可以根据浏览器是否支持WebP格式，给img元素赋予不同的src值。

首先我们需要用JS来判断浏览器是否支持WebP格式，方法是给浏览器一个WebP格式的图片，看浏览器能否正确渲染。这种方法是异步的，所以需要把后续的操作写在回调函数中。我们可以将结果存储在localStorage中，这样之后就不用再次检查了。

```
function checkWebp(callback) {
  var img = new Image();
  img.onload = function () {
    var result = (img.width > 0) && (img.height > 0);
    callback(result);
  };
  img.onerror = function () {
    callback(false);
  };
  img.src = 'data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA';
}
```

然后用下面的代码来根据是否支持WebP替换相应的src。

```
function showImage(useWebp){
  var imgs = Array.from(document.querySelectorAll('img'));

  imgs.forEach(function(i){
    var src = i.attributes['data-src'].value;

    if (useWebp){
      src = src.replace(/\.jpg$/, '.webp');
    }

    i.src = src;
  });
}

checkWebp(showImage);
```

这种方式的优点是可以与已有的懒加载函数相结合。而且使用JS，我们还可以处理CSS中的图片（如背景图等）。

 

 

 

#### 姿势三：使用JS解码WebP图片

既然WebP的解码器是开源的，那么能否用JS来实现呢？当然可以，[有人就用JS写出了WebP的解码器](http://webpjs.appspot.com/)。引入这个JS库，就是将所有的WebP图片用JS解码后转换为base64，然后替换掉原来的URL，这样就可以让原本不支持WebP的浏览器正常显示WebP了。这个库的使用方法非常简单，看网页的说明即可。

这种方法的缺点是，因为JS要解码WebP图片，需要在此异步请求src中的URL（不过因为图片本身之前被下载了一次，直接使用了缓存）；而且JS解码比较慢，对性能有影响，可能需要一段时间才能显示出图片来。

------

以上就是在浏览器中使用WebP图片的几种方法，可以根据自己的实际情况选用。在我们的实践中，使用了WebP格式后，图片的体积普遍缩小了1/3以上，既加快了加载的速度，还节省了用户的流量，我们十分推荐从现在就开始使用这种格式。