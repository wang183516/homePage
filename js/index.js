//响应式
(function () {
    var supportsOrientationChange = 'onorientationchange' in window ? 'orientationchange' : 'resize';
    var clientWidth = document.documentElement.clientWidth;
    // var timer;
    function setRem() {
        clientWidth = document.documentElement.clientWidth;
        var nowPX = clientWidth / 1400 * 100;
        document.documentElement.style.fontSize = nowPX + 'px';
    }
    clientWidth !== 1400 && setRem();
    window.addEventListener(supportsOrientationChange, function () {
        setRem();
        // clearTimeout(timer);
        // timer = setTimeout(function () {
        //     setRem();
        // }, 300);
    }, false);
})();
$('.pic1').hover(function(){
    $(this).children('.mask').css({display: 'block'});
},function(){
    $(this).children('.mask').css({display: 'none'});
});
$('.pic2').hover(function(){
    $(this).children('.mask').css({display: 'block'});
},function(){
    $(this).children('.mask').css({display: 'none'});
});
$('.pic3').hover(function(){
    $(this).children('.mask').css({display: 'block'});
},function(){
    $(this).children('.mask').css({display: 'none'});
});
$('.pic4').hover(function(){
    $(this).children('.mask').css({display: 'block'});
},function(){
    $(this).children('.mask').css({display: 'none'});
});
$('.pic5').hover(function(){
    $(this).children('.mask').css({display: 'block'});
},function(){
    $(this).children('.mask').css({display: 'none'});
});
// 页面滚动 执行动画
$(document).scroll(function(){
    if($(document).scrollTop() >= 2700){
        $('.banner2').children('img').stop().animate({bottom: 0},2000);
    }else{
        $('.banner2').children('img').css({bottom: '-6.65rem'});
    }
});
$('.face').children('#threePic').click(function(){
    $(this).css('background','url("../image/index/content.3.3.png") no-repeat center center');
    $('#one').css('background','url("../image/index/content.3.01.png") no-repeat center center');
    $('#two').css('background','url("../image/index/content.3.02.png") no-repeat center center');
    $('#four').css('background','url("../image/index/content.3.04.png") no-repeat center center');
    $(this).children('p').css({display: 'none'}).end().siblings().children('p').css({display: 'block'});
    $('.point').css({display: 'block'});
    $('#face').css({display: 'block'});
    $('.banner2').children('img').css({display: 'none'});
});
$('.face').children('#one').click(function(){
    $('#threePic').css('background','url("../image/index/content.3.01.png") no-repeat center center');
    $('#two').css('background','url("../image/index/content.3.02.png") no-repeat center center');
    $('#four').css('background','url("../image/index/content.3.04.png") no-repeat center center');
    $(this).css('background','url("../image/index/content.3.1.png") no-repeat center center');
    $(this).children('p').css({display: 'none'}).end().siblings().children('p').css({display: 'block'});
});
$('.face').children('#two').click(function(){
    $('#one').css('background','url("../image/index/content.3.01.png") no-repeat center center');
    $('#threePic').css('background','url("../image/index/content.3.02.png") no-repeat center center');
    $('#four').css('background','url("../image/index/content.3.04.png") no-repeat center center');
    $(this).css('background','url("../image/index/content.3.2.png") no-repeat center center');
    $(this).children('p').css({display: 'none'}).end().siblings().children('p').css({display: 'block'});
});
$('.face').children('#four').click(function(){
    $('#one').css('background','url("../image/index/content.3.01.png") no-repeat center center');
    $('#two').css('background','url("../image/index/content.3.02.png") no-repeat center center');
    $('#threePic').css('background','url("../image/index/content.3.04.png") no-repeat center center');
    $(this).css('background','url("../image/index/content.3.4.png") no-repeat center center');
    $(this).children('p').css({display: 'none'}).end().siblings().children('p').css({display: 'block'});
});
$('#back').find('.top').hover(function(){
    $(this).stop().animate({right: 0},500);
},function(){
    $(this).stop().animate({right: '-.5rem'},500);
});
$('#back').find('.medium').hover(function(){
    $(this).stop().animate({right: 0},500);
},function(){
    $(this).stop().animate({right: '-.5rem'},500);
});
$('#back').find('.bottom').hover(function(){
    $(this).stop().animate({right: 0},500);
},function(){
    $(this).stop().animate({right: '-.5rem'},500);
});
$('#back').find('.bottom').click(function(){
    $('html').stop().animate({scrollTop: 0},1000);
});
// 点击变美按钮，出现气泡动画
$('#main').on('click',function(){
    $('.main').css({display: 'none'});
    $('.banner').children('.beauty').children('img').css({display:'none'});
    $('.banner').children('.eyeMakeup').stop().animate({left:'2.6rem'},500);
    $('.banner').children('.manicure').stop().animate({left:'5.4rem'},500);
    $('.banner').children('.facialCare').stop().animate({left:'8.5rem'},500);
    $('.banner').children('.lipstick').stop().animate({left:'11rem'},500);
    $('.banner').children('.eyeMakeup').css({display:'block'});
    $('.banner').children('.manicure').css({display:'block'});
    $('.banner').children('.facialCare').css({display:'block'});
    $('.banner').children('.lipstick').css({display:'block'});
});