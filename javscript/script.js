     // JavaScript Document
jQuery(document).ready(function(){
	$('.navi>li').mouseover(function(){
		$(this).find('.submenu').stop().slideDown();
		}).mouseout(function(){
		$(this).find('.submenu').stop().slideUp();
	});
	
		$(".toolbar li:first").click(function(){
			$("#modal_1").addClass("active");
		});

		$(".btn").click(function(){
			$("#modal_1").removeClass("active");
		});
	
		$(".toolbar li:nth-child(2)").click(function(){
		$("#modal_2").addClass("active");
		});

		$(".btn").click(function(){
			$("#modal_2").removeClass("active");
		});
	
		$(function() {
			// 보이기 | 숨기기
			$(window).scroll(function() { if ($(this).scrollTop() > 250) {
			//250 넘으면 버튼이 보여짐니다.
			$('#topBtn').fadeIn(); } else { $('#topBtn').fadeOut(); } });
			// 버튼 클릭시
			$("#topBtn").click(function() { $('html, body').animate({ scrollTop : 0 }, 400);
			return false; }); });

	});
	$( ".btn_slides_next" ).click(function() {
    if(!$("#slides li").last().is(":visible")){
        $("#slides li:visible").hide().next("li").fadeIn("40");
        $(".btn_slides_prev").removeClass("off");
    }
    if($("#slides li").last().is(":visible")){
        $('.btn_slides_next').addClass('off');
    }
    return false;
});

$( ".btn_slides_prev" ).click(function() {
    if(!$("#slides li").first().is(":visible")){
        $("#slides li:visible").hide().prev("li").fadeIn("40");
        $(".btn_slides_next").removeClass("off");
    }
    if($("#slides li").first().is(":visible")){
        $('.btn_slides_prev').addClass('off');
    }
    return false;
});