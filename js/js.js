// //card 模块图标显示
$('.talk').mouseenter(function(event) {
    $(this).next().show();
});
$('.linkmore>li >a').mouseleave(function(event) {
    $('.linkmore>li >img').hide();
});


// 底部返回按钮-----------------------------------------------

function b() {
    var h = $(window).height();
    var t = $(document).scrollTop();
    if (t > h) {
        $('#gotop').show();
    } else {
        $('#gotop').hide();
    }
}

$(document).ready(function(e) {
    b();
    // 返回按钮点击事件
    $('#gotop').click(function() {
        clearInterval(timer);
        var leader = parseInt($(document).scrollTop());
        var target = 0;
        var step = (target - leader) / 10;
        var timer = setInterval(function() {
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            leader = leader > 0 ? leader + step : 0;
            $(document).scrollTop(leader);
            if (target === leader) {
                clearInterval(timer);
            }
        }, 17)


    })
});

$(window).scroll(function(e) {
    b();
})
