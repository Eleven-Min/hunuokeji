$(function() {
	$(".nav>li>a").mouseover(function() {
		var a = $(this).width()
		$(this).addClass("color")
		$(".bc").css({
			"left": $(this).offset().left + 12,
			"width": a +2,
			"opacity": 1
		})
	})
	$(".nav>li>a").mouseout(function() {
		$(this).removeClass("color")
		$(".bc").css({
			"opacity": 0,
			"width": 0
		})
	})
	$(document).scroll(function() {
		if($("body").scrollTop() > 130) {
			$(".nav").css("height", "70px")
		}
		if($("body").scrollTop() < 130) {
			$(".nav").css("height", "92px")
		}
	})
	var num = 0;
	$(".friendLink>dl>dd>button").click(function() {
		num++
		$(".friendLink>dl>dd").eq(0).css("height", "60px")
		
		if(num === 2) {
			$(".friendLink>dl>dd").eq(0).css("height", "17px")
			num=0
		}
	})

})