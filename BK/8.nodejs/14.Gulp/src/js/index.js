//防止缩小失去背景
window.addEventListener('resize', function () {
    if (window.innerWidth <= 1200)
        $('.black_bg').css('width', '1200px')
    else
        $('.black_bg').css('width', '100%')
})

//屏幕移动
function windowmove(target, callback) {
    clearInterval(window.timer);
    window.timer = setInterval(function () {
        var step = (target - window.pageYOffset) / 5;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        if (window.pageYOffset >= target - 5 && window.pageYOffset <= target + 5) {
            clearInterval(window.timer);
            callback && callback();
        }
        window.scroll(0, window.pageYOffset + step);
    }, 15);
}

// 返回顶部图标出现
$(document).scroll(
    function () {
        if (window.pageYOffset > 100) {
            $($('aside ul li')[5]).css('display', 'block');
        } else {
            $($('aside ul li')[5]).css('display', 'none');
        }
    }
);

// 返回顶部
$($('aside ul li')[5]).click(
    function () {
        windowmove(0);
    }
);


// 经过nav2的特定项时出现过渡效果
var $show_container = $('.show_container');
var $nav3_ul = $('.nav3 ul');
for (var i = 0; i < $show_container.length; i++) {
    $($show_container[i]).mouseover(
        function () {
            //经过时添加打开的css
            $('.nav3').addClass('nav3_open');
            //打开的css的样式选择
            var j = 0;
            for (j = 0; j < $show_container.length; j++) {
                if (this == $show_container[j]) {
                    break;
                }
            }
            for (var k = 0; k < $nav3_ul.length; k++) {
                $($nav3_ul[k]).css('display', 'none');
            }
            $($nav3_ul[j]).css('display', 'block');
        }
    );
}
for (var i = 0; i < $show_container.length; i++) {
    $($show_container[i]).mouseout(
        function () {
            $('.nav3').removeClass('nav3_open');
        }
    );
}
$('.nav3').mouseover(function () {
    $('.nav3').addClass('nav3_open');
});
$('.nav3').mouseout(function () {
    $('.nav3').removeClass('nav3_open');
});

var index = 0;
var timer = null;
// 定时器自动播放
function sliderTimer() {
    timer = setInterval(function () {
        index++;
        if (index == $('.slider .lb_img li').length) {
            index = 0;
        }
        sliderIndex(index)
    }, 2000)
}
sliderTimer()
// 根据索引值点亮小圆点并显示对应图片
function sliderIndex(index) {
    // 对应图片显示
    $('.slider .lb_img li').eq(index).fadeIn(600).siblings().fadeOut(600);
    // 小圆点点亮
    $('.tab span').eq(index).addClass('show').siblings().removeClass('show')
}
// 小圆点点击事件
$('.tab span').click(function () {
    clearInterval(timer)
    index = $(this).index()
    sliderIndex(index)
})
// 左侧按钮点击事件
$('.arrow_left').click(function () {
    index--;
    if (index == -1) {
        index = $('.slider .lb_img li').length - 1;
    }
    sliderIndex(index)
})
// 右侧按钮点击事件
$('.arrow_right').click(function () {
    index++;
    if (index == $('.slider .lb_img li').length) {
        index = 0;
    }
    sliderIndex(index)
})
// 鼠标移入轮播区域关闭定时器
$('.slider').mouseenter(function () {
    clearInterval(timer);
})
// 鼠标移出轮播区域开启定时器
$('.slider').mouseleave(function () {
    sliderTimer();
})

//设置column_show的位置
$column_shows = $('.slider .column_show');
for (var i = 0; i < $column_shows.length; i++) {
    $($column_shows[i]).css('top', +20 - (i + 1) * 40 + 'px');
}
//设置column_show的宽度和column_show里的li的位置
var $column_show_uls = $('.column_show ul');
for (var i = 1; i < $column_show_uls.length + 1; i++) {
    var $lis = $('.column_show_ul' + i + ' li');
    //由li的个数决定column_show的宽度
    if ($lis.length <= 6) {
        $($column_shows[i - 1]).css('width', '242.5px');
    } else if ($lis.length > 6 && $lis.length <= 12) {
        $($column_shows[i - 1]).css('width', '485px');
    } else if ($lis.length > 12 && $lis.length <= 18) {
        $($column_shows[i - 1]).css('width', '727.5px');
    } else if ($lis.length > 18 && $lis.length <= 24) {
        $($column_shows[i - 1]).css('width', '970px');
    }
    //给每个li分配位置
    for (var j = 0; j < $lis.length; j++) {
        switch (j % 6) {
            case 0:
                $($lis[j]).css('top', '0px');
                break;
            case 1:
                $($lis[j]).css('top', '75px');
                break;
            case 2:
                $($lis[j]).css('top', '150px');
                break;
            case 3:
                $($lis[j]).css('top', '225px');
                break;
            case 4:
                $($lis[j]).css('top', '300px');
                break;
            case 5:
                $($lis[j]).css('top', '375px');
                break;
        }
        if (j >= 0 && j < 6) {
            $($lis[j]).css('left', '0px');
        } else if (j >= 6 && j < 12) {
            $($lis[j]).css('left', '242.5px');
        } else if (j >= 12 && j < 18) {
            $($lis[j]).css('left', '485px');
        } else if (j >= 18 && j < 24) {
            $($lis[j]).css('left', '727.5px');
        }
    }
}

//倒计时
setInterval(() => {
    // 优惠时间为每两个小时
    var date = new Date();
    var discount_time = date.getHours() % 2 == 1 ? date.getHours() + 1 : date.getHours() + 2;
    var date_string = '' + date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + ' ' + discount_time + ':0:0';
    //计算倒计时
    var nowTime = +new Date();//现在的时间戳
    var inputTime = +new Date(date_string);//输入的时间戳
    var over_secord = (inputTime - nowTime) / 1000;//过去的秒数
    var leave_h = parseInt(over_secord / 60 / 60 % 24);//小时数
    var leave_m = parseInt(over_secord / 60 % 60);//分钟数
    var leave_s = parseInt(over_secord % 60);//秒数
    leave_h = leave_h < 10 ? '0' + leave_h : leave_h;
    leave_m = leave_m < 10 ? '0' + leave_m : leave_m;
    leave_s = leave_s < 10 ? '0' + leave_s : leave_s;


    $('.secordkill_left .dj_time2 .h').text('' + leave_h);
    $('.secordkill_left .dj_time2 .m').text('' + leave_m);
    $('.secordkill_left .dj_time2 .s').text('' + leave_s);

    // discount_time小于10时，前面加0，如4改为04
    discount_time = discount_time < 10 ? '0' + discount_time : discount_time;
    $('.secordkill_left .time').text(discount_time + ":00 场");

}, 1000);


// 秒杀模块滑动
function animate(obj, target, callback) {
    // 先清除以前的定时器，只保留当前的一个定时器执行
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        // 步长值写到定时器的里面
        // 把我们步长值改为整数 不要出现小数的问题
        // var step = Math.ceil((target - obj.offsetLeft) / 10);
        var step = (target - obj.offsetLeft) / 30;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        if (obj.offsetLeft == target) {
            // 停止动画 本质是停止定时器
            clearInterval(obj.timer);
            // 回调函数写到定时器结束里面
            // if (callback) {
            //     // 调用函数
            //     callback();
            // }
            callback && callback();
        }
        // 把每次加1 这个步长值改为一个慢慢变小的值  步长公式：(目标值 - 现在的位置) / 10
        obj.style.left = obj.offsetLeft + step + 'px';

    }, 5);
}

var secordkill_index = 0;
var $secordkill_lis = $('.secordkill_right ul li');
$('.mi_secordkill .before_after .before').click(
    function () {
        var num = secordkill_index;
        var num2;
        if (num >= 4) {
            secordkill_index = secordkill_index - 4;
            num2 = -242.5 * secordkill_index;
            animate($('.secordkill_right ul')[0], num2);
            $('.mi_secordkill .before_after .after div').addClass('after_can_use');
        } else if (num < 4 && num > 0) {
            secordkill_index = 0;
            num2 = -242.5 * secordkill_index;
            animate($('.secordkill_right ul')[0], num2)
            $('.mi_secordkill .before_after .after div').addClass('after_can_use');
            console.log($('.mi_secordkill .before_after .before div')[0]);
        }
        if (num <= 4) {
            $('.mi_secordkill .before_after .before div').removeClass('before_can_use');
        }
    }
);

$('.mi_secordkill .before_after .after').click(
    function () {
        var num = $secordkill_lis.length - secordkill_index - 4;
        var num2;
        if (num >= 4) {
            secordkill_index = secordkill_index + 4;
            num2 = -242.5 * secordkill_index;
            $('.mi_secordkill .before_after .before div').addClass('before_can_use');
            animate($('.secordkill_right ul')[0], num2);
        } else if (num < 4 && num > 0) {
            secordkill_index = secordkill_index + num;
            num2 = -242.5 * secordkill_index;
            animate($('.secordkill_right ul')[0], num2)
            $('.mi_secordkill .before_after .before div').addClass('before_can_use');
            $('.mi_secordkill .before_after .after div').removeClass('after_can_use');
        }
    }
);

$('.mi_secordkill .before_after .before').mouseover(
    function () {
        if ($(this).children('div').attr('class'))
            $(this).children("div").addClass('before_mi_color');
    }
);
$('.mi_secordkill .before_after .before').mouseout(
    function () {
        $(this).children("div").removeClass('before_mi_color');
    }
);
$('.mi_secordkill .before_after .after').mouseover(
    function () {
        if ($(this).children('div').attr('class'))
            $(this).children("div").addClass('after_mi_color');
    }
);
$('.mi_secordkill .before_after .after').mouseout(
    function () {
        $(this).children("div").removeClass('after_mi_color');
    }
);

//model_show控制显示内容
var $title_msg = $('.model .title_msg');
var $model = $('.model_show_right');
for (var i = 1; i < $title_msg.length; i++) {

    var divs = $($title_msg[i]).children('div');
    var uls = $($model[i]).children('ul');


    for (var m = 0; m < divs.length; m++) {
        $(divs[m]).mouseover(
            function () {
                var n;
                for (n = 0; n < $title_msg.length; n++) {
                    if ($title_msg[n] == $(this).parents()[0]) {
                        break;
                    }
                }
                var divs = $($title_msg[n]).children('div');
                var uls = $($model[n]).children('ul');
                var k = 0;
                //排他思想
                for (var j = 0; j < divs.length; j++) {
                    $(divs[j]).removeClass('choose');
                    $(uls[j]).removeClass('ul_show');
                    if (divs[j] == this) {
                        k = j;
                    }
                }
                $(this).addClass('choose');
                $(uls[k]).addClass('ul_show');
            }
        );
    }
}

//播放视频
var $video_lis = $('.videos ul li');
var $video_panel = $('.video_panel');
var $video = $('.video_show video');
$($video_lis[0]).click(
    function () {
        $video_panel.css('display', 'block');
        $video.prop('src', 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/11c70c96529b6e6938567ec1aa0910e0.mp4');
    }
);
$($video_lis[1]).click(
    function () {
        $video_panel.css('display', 'block');
        $video.prop('src', 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/7cdabcaa763392c86b944eaf4e68d6a3.mp4');
    }
);
$($video_lis[2]).click(
    function () {
        $video_panel.css('display', 'block');
        $video.prop('src', 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e25d81c4922fca5ebe51877717ef9b76.mp4');
    }
);
$($video_lis[3]).click(
    function () {
        $video_panel.css('display', 'block');
        $video.prop('src', 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/eadb8ddc86f1791154442a928b042e2f.mp4');
    }
);
$('.video_show .control div').click(
    function () {
        $video_panel.css('display', 'none');
        $video[0].pause();
    }
);