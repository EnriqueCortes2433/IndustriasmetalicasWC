$(function(){
		
		share();
	
	/(iPhone|iPad|iPhone OS|Phone|iPod|iOS)/i.test(navigator.userAgent)&&(head=document.getElementsByTagName("head"),viewport=document.createElement("meta"),viewport.name="viewport",viewport.content="target-densitydpi=device-dpi, width=1340px, user-scalable=no",head.length>0&&head[head.length-1].appendChild(viewport));
	jQuery(".case_you .slideBox").slide({ mainCell:"ul",vis:3,prevCell:".sPrev",nextCell:".sNext",effect:"leftLoop",autoPlay:true});
	jQuery(".case_you").slide({titCell:".parHd li",mainCell:".parBd"});
	jQuery(".showImg_left").slide({titCell:".hd ul",mainCell:".bd ul",autoPage:true,effect:"left",autoPlay:true,vis:1,delayTime:1000});
	jQuery(".floor_4_2").slide({});
	jQuery(".floor_y_b").slide({titCell:".hd ul",mainCell:".bd ul",autoPage:true,effect:"left",autoPlay:true,vis:2,delayTime:1000});
	jQuery(".txtScroll-top").slide({titCell:".hd ul",mainCell:".bd ul",autoPage:true,effect:"top",autoPlay:true,vis:2,delayTime:700});
	$('#toolbar dd').bind({
        'mouseenter': function () {
            if ($(this).children('.slide').length) {
                var _this = $(this).children('.slide');
                _this.stop(true, true).animate({ 'width': 180 }, 200);
            } else if ($(this).children('.pop').length) {
                var _this = $(this).children('.pop');
                _this.show().animate({ 'right': 65 }, 180);
            }
        },
        'mouseleave': function () {
            if ($(this).children('.slide').length) {
                var _this = $(this).children('.slide');
                _this.stop(false, false).animate({ 'width': 0 }, 200);
            } else if ($(this).children('.pop').length) {
                var _this = $(this).children('.pop');
                _this.hide().animate({ 'right': 90 },190);
            }
        }
    });
    $("#top").click(function () {
        $("body, html").stop().animate({ "scrollTop": 0 });
    });

		
	
		

	$(".returnTop2,.returnTop").click(function() {
		$("body, html").stop().animate({
			"scrollTop": 0
		});
	});
	
	if($(".imglist").length){
        $(".imglist").each(function(){
            var _this=$(this);
            imglist(_this);
        });
    }
	
	$("#addFavo").click(function() {
		var fm = $("title").html();
		AddFavorite(fm, location.href, '');
	});
	$("#setHome").click(function(){
        SetHome($('title').html(), location.href, '');
	});
	
	var sflag=true;
	$(".search_btn").click(function(){
		if(sflag){
			$(".header_search").addClass("addy");
			sflag=false;
		}else{
			$(".header_search").removeClass("addy");
			sflag=true;
		}
	});

	

	// Handle click on toggle search button
	$('#toggle-search').click(function() {
		$('#search-form, #toggle-search').toggleClass('open');
		return false;
	});

	// Handle click on search submit button
	$('#search-form input[type=submit]').click(function() {
		$('#search-form, #toggle-search').toggleClass('open');
		return true;
	});

	// Clicking outside the search form closes it
	$(document).click(function(event) {
		var target = $(event.target);
  
		if (!target.is('#toggle-search') && !target.closest('#search-form').size()) {
			$('#search-form, #toggle-search').removeClass('open');
		}
	});



	$(".lijizhuce .tijiao").click(function(){	
		if($(".ydewm").is(":visible")){
			$(".ydewm").hide();
		}else{
			$(".ydewm").show();
		}
		if($(".ydewmbg").is(":visible")){
			$(".ydewmbg").hide();
		}else{
			$(".ydewmbg").show();
		}
	});
	$(".modal-close").click(function(){	
			$(".ydewmbg").hide();
	});


// banner焦点图
    if (!$("#banner").length || $("#banner li").length <= 1) {	return false; }
    $("#banner ul li:gt(0)").css({"display":"none"});
    var b = $("#banner"),
        me = $("#banner ul"),
        tip = $("#banner .tip"),
        t, interval = 10000,
        speed = 1000,
        speed2 = 700,
        n = 0,
        N = me.children("li").length;
    wid = b.children("li").width();
    step = 200,time = 5000;
    if ($("#banner .tip").length) {
        var htmlTip = "";
        for (var i = 0; i < N; i++) {
            if (i == 0) {
                htmlTip += "<span class='cur'>"+(i+1)+"</span>";
            } else {
                htmlTip += "<span>"+(i+1)+"</span>";
            }
        }
        tip.html(htmlTip);
    }
    var func = function() {
        if (n >= N - 1) {
            n = 0;
        }else if(n < -1){
            n = N-1;
        }
        else {
            n++;
        }
        me.children("li").eq(n).css({
            "z-index": 2
        }).stop().fadeIn(speed).siblings("li").css({
            "z-index": 1
        }).stop().fadeOut(speed2);
        if ($("#banner .tip").length) {
            tip.children("span").eq(n).addClass("cur").siblings("span").removeClass("cur");
        }
    }
    $("#banner").hover(function(){
        $("#btn_prev,#btn_next").fadeIn()
    },function(){
        $("#btn_prev,#btn_next").fadeOut()
    })
    $dragBln = false;
    $("#btn_prev").click(function(){
        clearInterval(t);
        n -= 2;
        func();
        t = setInterval(func, time)
    });
    $("#btn_next").click(function(){
        clearInterval(t);
        func();
        t = setInterval(func, time)
    });

    tip.children("span").click(function() {
        clearInterval(t);
        n = $(this).index() - 1;
        func();
        t = setInterval(func, interval);
    })
    $("#banner ul.list li").mouseenter(function() {
        clearInterval(t);
    }).mouseleave(function() {
        t = setInterval(func, time);
    });
    t = setInterval(func, interval);







});

// 加入收藏 兼容360和IE6

function shoucang(sTitle,sURL)
{
try
{
window.external.addFavorite(sURL, sTitle);
}
catch (e)
{
try
{
window.sidebar.addPanel(sTitle, sURL, "");
}
catch (e)
{
alert("加入收藏失败，请使用Ctrl+D进行添加");
}
}
} 

function share(){
	window._bd_share_config = {
		share : [{
			"bdSize" : 16
		}],
	}
	with(document)0[(getElementsByTagName('head')[0]||body).appendChild(createElement('script')).src='http://bdimg.share.baidu.com/static/api/js/share.js?cdnversion='+~(-new Date()/36e5)];
}