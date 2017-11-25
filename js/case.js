$(function() {
	var dataImg1 = [{
			"src": "../images/ic48.jpg",
			"title": "羊城生活圈"
		}, {
			"src": "../images/ic4.jpg",
			"title": "德福塑料网"
		}, {
			"src": "../images/ic3.jpg",
			"title": "osnic"
		}, {
			"src": "../images/ic1.jpg",
			"title": "大爱有声"
		}, {
			"src": "../images/ic2.jpg",
			"title": "家事无忧"
		}, {
			"src": "../images/ic35.jpg",
			"title": "案例胡子网站建设项目"
		},
		{
			"src": "../images/ic21.jpg",
			"title": "月亮小屋"
		}, {
			"src": "../images/ic47.jpg",
			"title": "广东豪美铝业股份有限公司"
		}, {
			"src": "../images/ic46.jpg",
			"title": "惠州雷士光电股份有限公司"
		}
	]
	var dataImg2 = [{
			"src": "../images/ic66.jpg",
			"title": "羊城生活圈"
		}, {
			"src": "../images/ic33.jpg",
			"title": "德福塑料网"
		}, {
			"src": "../images/ic32.jpg",
			"title": "osnic"
		}, {
			"src": "../images/ic38.jpg",
			"title": "大爱有声"
		}, {
			"src": "../images/ic55.jpg",
			"title": "家事无忧"
		}, {
			"src": "../images/ic77.jpg",
			"title": "案例胡子网站建设项目"
		},
		{
			"src": "../images/ic88.jpg",
			"title": "月亮小屋"
		}, {
			"src": "../images/ic66.jpg",
			"title": "广东豪美铝业股份有限公司"
		}, {
			"src": "../images/ic22.jpg",
			"title": "惠州雷士光电股份有限公司"
		}
	]
	var dataImg3 = [{
			"src": "../images/ic56.jpg",
			"title": "羊城生活圈"
		}, {
			"src": "../images/ic66.jpg",
			"title": "德福塑料网"
		}, {
			"src": "../images/ic85.jpg",
			"title": "osnic"
		}, {
			"src": "../images/ic86.jpg",
			"title": "大爱有声"
		}, {
			"src": "../images/ic84.jpg",
			"title": "家事无忧"
		}, {
			"src": "../images/ic82.jpg",
			"title": "案例胡子网站建设项目"
		},
		{
			"src": "../images/ic56.jpg",
			"title": "月亮小屋"
		}, {
			"src": "../images/ic77.jpg",
			"title": "广东豪美铝业股份有限公司"
		}, {
			"src": "../images/ic36.jpg",
			"title": "惠州雷士光电股份有限公司"
		}
	]
	var dataImg4 = [{
			"src": "../images/ic44.jpg",
			"title": "羊城生活圈"
		}, {
			"src": "../images/ic55.jpg",
			"title": "德福塑料网"
		}, {
			"src": "../images/ic66.jpg",
			"title": "osnic"
		}, {
			"src": "../images/ic75.jpg",
			"title": "大爱有声"
		}, {
			"src": "../images/ic38.jpg",
			"title": "家事无忧"
		}, {
			"src": "../images/ic45.jpg",
			"title": "案例胡子网站建设项目"
		},
		{
			"src": "../images/ic58.jpg",
			"title": "月亮小屋"
		}, {
			"src": "../images/ic55.jpg",
			"title": "广东豪美铝业股份有限公司"
		}, {
			"src": "../images/ic72.jpg",
			"title": "惠州雷士光电股份有限公司"
		}
	]
	var dataImg5 = [{
			"src": "../images/ic56.jpg",
			"title": "羊城生活圈"
		}, {
			"src": "../images/ic35.jpg",
			"title": "德福塑料网"
		}, {
			"src": "../images/ic22.jpg",
			"title": "osnic"
		}, {
			"src": "../images/ic88.jpg",
			"title": "大爱有声"
		}, {
			"src": "../images/ic56.jpg",
			"title": "家事无忧"
		}, {
			"src": "../images/ic44.jpg",
			"title": "案例胡子网站建设项目"
		},
		{
			"src": "../images/ic22.jpg",
			"title": "月亮小屋"
		}, {
			"src": "../images/ic11.jpg",
			"title": "广东豪美铝业股份有限公司"
		}, {
			"src": "../images/ic45.jpg",
			"title": "惠州雷士光电股份有限公司"
		}
	]
	var str1 = ""
	for(var i = 0; i < dataImg1.length; i++) {
		str1 += '<li class="col-lg-3 co-md-3" title="' + dataImg1[i].title + '"><h4><img class="img-responsive" src="' + dataImg1[i].src + '"/></h4><a href=""><span>' + dataImg1[i].title + '</span><i></i></a></li>'
	}
	$(".cp>ul").eq(0).html(str1)

	var str2 = ""
	for(var i = 0; i < dataImg2.length; i++) {
		str2 += '<li class="col-lg-3" title="' + dataImg2[i].title + '"><h4><img src="' + dataImg2[i].src + '"/></h4><a href=""><span>' + dataImg2[i].title + '</span><i></i></a></li>'
	}
	$(".cp>ul").eq(1).html(str2)
	var str3 = ""
	for(var i = 0; i < dataImg3.length; i++) {
		str3 += '<li class="col-lg-3" title="' + dataImg3[i].title + '"><h4><img src="' + dataImg3[i].src + '"/></h4><a href=""><span>' + dataImg3[i].title + '</span><i></i></a></li>'
	}
	$(".cp>ul").eq(2).html(str3)
	var str4 = ""
	for(var i = 0; i < dataImg4.length; i++) {
		str4 += '<li class="col-lg-3" title="' + dataImg4[i].title + '"><h4><img src="' + dataImg4[i].src + '"/></h4><a href=""><span>' + dataImg4[i].title + '</span><i></i></a></li>'
	}
	$(".cp>ul").eq(3).html(str4)
	var str5 = ""
	for(var i = 0; i < dataImg5.length; i++) {
		str5 += '<li class="col-lg-3" title="' + dataImg5[i].title + '"><h4><img src="' + dataImg5[i].src + '"/></h4><a href=""><span>' + dataImg5[i].title + '</span><i></i></a></li>'
	}
	$(".cp>ul").eq(4).html(str5)
	$(".cp>ul>li").mouseover(function() {
		$(this).children("h4").css("top", "-30px")
		$(this).children("a").css({
			"bottom": 0
		})
	}).mouseout(function() {
		$(this).children("h4").css("top", "0px")
		$(this).children("a").css({
			"bottom": "-68px"
		})
	})
	$(".cp>ul>li>a").mouseover(function() {
		$(this).css({
			"background-color": "#00aaff",
			"color": "#fff"
		})
	}).mouseout(function() {
		$(this).css({
			"background-color": "#fff",
			"color": "#000"
		})
	})
	
	var m = 0;
	$(".next").click(function() {
		m++;
		if(m > 4) {
			m = 4
		}
		$(".pa>ul>li").eq(m).addClass("co").siblings().removeClass("co")
		$(".cp>ul").eq(m).css("display", "block").siblings().css("display", "none")
	})
	$(".prev").click(function() {
		m--;
		if(m < 0) {
			m = 0
		}
		$(".pa>ul>li").eq(m).addClass("co").siblings().removeClass("co")
		$(".cp>ul").eq(m).css("display", "block").siblings().css("display", "none")
	})
	for(var i = 0; i < $(".pa>ul>li").length; i++) {
		$(".pa>ul>li").eq(i).click(function() {
			$(this).addClass("co").siblings().removeClass("co")
			$(".cp>ul").eq($(this).index()).css("display", "block").siblings().css("display", "none")
			m = $(this).index()
		})
	}
})