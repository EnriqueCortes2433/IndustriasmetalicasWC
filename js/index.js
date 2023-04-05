/**
 * Created by admin on 2017/6/22.
 */
window.onload=function () {
    var swiper = new Swiper('.swiper-container', {
        spaceBetween: 30,
        effect: 'coverflow',
        loop: true,
        speed:1000,
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,

        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        on:{
            init: function(){
                swiperAnimateCache(this); //隐藏动画元素
                swiperAnimate(this); //初始化完成开始动画
            },
            slideChangeTransitionEnd: function(){
                swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
            }
        }
    });
    var sliceHeight=$(window).height()-170; //定义Banner高度
    $('.swiper-container').height(sliceHeight);
			
};
$(document).ready(function(){
window.onscroll = function(){    
    var scrollTop = document.body.scrollTop||document.documentElement.scrollTop;//谷歌IE等浏览器不能识别	
    if(scrollTop){
            $('.headerdh').addClass('margin');
            $('.headerlogo').addClass('scroll');
			$('.fixed').addClass('fixeddiv');
    }else{
            $('.headerdh').removeClass('margin');			
            $('.headerlogo').removeClass('scroll');
			$('.fixed').removeClass('fixeddiv');
		}
};
});

