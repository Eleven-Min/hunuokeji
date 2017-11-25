$(function() {
	$("#menu>ul>li").click(function() {
		$(this).addClass("active").siblings().removeClass("active");
		var _this = $(this);
		$("body").animate({
			"scrollTop": _this.index() * $(".main>div").height()
		})
	})
	$(document).scroll(function() {
		$(".main>div").each(function(i) {
			if($("body").scrollTop() > i * 600 - 200) {
				$("#menu>ul>li").eq(i).addClass("active").siblings().removeClass("active");
			}
		})
	})
	for(var i = 0; i < $(".coord>a").length; i++) {
		$(".coord>a").eq(i).addClass("animated bounceInUp")
		$(".coord>a").eq(i).mouseover(function() {
			$(this).addClass("animated bounce").siblings().removeClass("bounceInUp bounce")
		})
	}
	$(".box").addClass("animated bounceInDown")
	$(".kfapp").addClass("animated flipInX")
	$(".phone").addClass("animated swing")
	var dataPage = [{
			"color": "#fff"
		},
		{
			"color": "#f2684c"
		},
		{
			"color": "#3ec6ae"
		},
		{
			"color": "#ffb329"
		},
		{
			"color": "#e3493d"
		},
		{
			"color": "#01b760"
		},
		{
			"color": "#fda73a"
		},
		{
			"color": "#4987d2"
		},
		{
			"color": "#fdd13d"
		},
		{
			"color": "#7d5ee8"
		}
	]

	for(var i = 0; i < $("section>div").length; i++) {
		$("section>div").eq(i).css("backgroundColor", "dataPage[i].color")
	}
	var num=0;
	var timer;

	$('#menu li').click(function(event) {
		num=$(this).index();
		$('section').animate({'top':-100*num+'%'},500)
		$(this).addClass('active').siblings().removeClass('active');
	});
	$(document).mousewheel(function(e,d){
		//鼠标滚轮向下滚动：d=-1  向上滚动d=1
		//定时器setInterval(function(){},时间)
		//一次性定时器：setTimeout(function(){},时间)
		clearTimeout(timer)
		timer=setTimeout(function(){
			num=num-d;
			if (num>13) {
				num=13;
			}
			if (num<0) {
				num=0;
			}
			$('section').animate({'top':-100*num+'%'},500)
			//$('section>div').eq(num).children('.title').removeClass('no').parent().siblings('div').children('.title').addClass('no');
	
			$('.menu li').eq(num).addClass('active').siblings().removeClass('active');
		},500)

		
	})
	 
	/*if(index == 1) {
						$('#menu>ul>li').eq(0).addClass("active").siblings().removeClass("active")
						$('.section1>.phone').addClass("animated tada")
						console.log($(".coord>a").length)
					}
					if(index == 2) {
						$('#menu>ul>li').eq(1).addClass("active").siblings().removeClass("active")
					}
					if(index == 3) {
						$('#menu>ul>li').eq(2).addClass("active").siblings().removeClass("active")
					}
					if(index == 4) {
						$('#menu>ul>li').eq(3).addClass("active").siblings().removeClass("active")
						$('.section4').find('p').delay(500).animate({

							bottom: '0'

						}, 1500, 'easeOutExpo');

					}

					if(index == 5) {
						$('#menu>ul>li').eq(4).addClass("active").siblings().removeClass("active")
						$('.section5').find('p').delay(500).animate({

							bottom: '0'

						}, 1500, 'easeOutExpo');

					}
					if(index == 6) {
						$('#menu>ul>li').eq(5).addClass("active").siblings().removeClass("active")

						$('.section6').find('p').delay(500).animate({

							bottom: '0'

						}, 1500, 'easeOutExpo');

					}
					if(index == 7) {
						$('#menu>ul>li').eq(6).addClass("active").siblings().removeClass("active")
						$('.section7').find('p').delay(500).animate({

							bottom: '0'

						}, 1500, 'easeOutExpo');

					}
					if(index == 8) {
						$('#menu>ul>li').eq(7).addClass("active").siblings().removeClass("active")
						$('.section8').find('p').delay(500).animate({

							bottom: '0'

						}, 1500, 'easeOutExpo');

					}
					if(index == 9) {
						$('#menu>ul>li').eq(8).addClass("active").siblings().removeClass("active")
						$('.section9').find('p').delay(500).animate({

							bottom: '0'

						}, 1500, 'easeOutExpo');

					}
					if(index == 10) {
						$('#menu>ul>li').eq(9).addClass("active").siblings().removeClass("active")
						$('.section10').find('p').delay(500).animate({

							bottom: '0'

						}, 1500, 'easeOutExpo');

					}
					if(index == 11) {
						$('#menu>ul>li').eq(10).addClass("active").siblings().removeClass("active")
						$('.section11').find('p').delay(500).animate({

							bottom: '0'

						}, 1500, 'easeOutExpo');

					}
					if(index == 12) {
						$('#menu>ul>li').eq(11).addClass("active").siblings().removeClass("active")
						$('.section12').find('p').fadeIn(2000);

					}

				},

				onLeave: function(index, direction) {

					if(index == '2') {

						$('.section2').find('p').delay(500).animate({

							left: '-120%'

						}, 1500, 'easeOutExpo');

					}

					if(index == '3') {

						$('.section3').find('p').delay(500).animate({

							bottom: '-120%'

						}, 1500, 'easeOutExpo');

					}
					if(index == '4') {

						$('.section4').find('p').delay(500).animate({

							bottom: '-120%'

						}, 1500, 'easeOutExpo');

					}
					if(index == '5') {

						$('.section5').find('p').delay(500).animate({

							bottom: '-120%'

						}, 1500, 'easeOutExpo');

					}
					if(index == '6') {

						$('.section6').find('p').delay(500).animate({

							bottom: '-120%'

						}, 1500, 'easeOutExpo');

					}
					if(index == '7') {

						$('.section7').find('p').delay(500).animate({

							bottom: '-120%'

						}, 1500, 'easeOutExpo');

					}
					if(index == '8') {

						$('.section8').find('p').delay(500).animate({

							bottom: '-120%'

						}, 1500, 'easeOutExpo');

					}
					if(index == '9') {

						$('.section9').find('p').delay(500).animate({

							bottom: '-120%'

						}, 1500, 'easeOutExpo');

					}
					if(index == '10') {

						$('.section10').find('p').delay(500).animate({

							bottom: '-120%'

						}, 1500, 'easeOutExpo');

					}
					if(index == '11') {

						$('.section11').find('p').delay(500).animate({

							bottom: '-120%'

						}, 1500, 'easeOutExpo');

					}

					if(index == '12') {

						$('.section12').find('p').fadeOut(2000);

					}

				}

			});

		});*/
})