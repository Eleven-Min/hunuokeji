window.onload = function() {
	var bl = true
	document.onscroll = function() {
		//获取滚轮高度
		var scrollH = document.documentElement.scrollTop || document.body.scrollTop;
		var backTop = document.getElementsByClassName("inline2")[0];
		var backTop1 = backTop.getElementsByClassName("two")[0];
		var screenH = document.documentElement.clientHeight || document.body.clientHeight;
		var inlineH = backTop.offsetHeight
		var calendar = document.getElementsByClassName("calendar")[0];
		var calendarSpan = calendar.getElementsByTagName("span")
		/*在线客服*/
		changeTop = parseInt((screenH - inlineH)/7 + scrollH);
		startMove(backTop, {
			"top": changeTop
		});
		backTop1.onclick = function(){
			document.documentElement.scrollTop = document.body.scrollTop = 0;
			
		}
		
		var a = 0;
		var b = 0;
		var c = 0;
		if(bl) {
			var timer2 = setInterval(function() {
				a++;
				if(a == 11) {
					clearInterval(timer2)
				} else {
					calendarSpan[0].innerHTML = 7 + a;
					bl = false
				}
			}, 100)
			var timer3 = setInterval(function() {
				b += 282;
				if(b == 8742) {
					clearInterval(timer3)
				} else {
					calendarSpan[1].innerHTML = 15000 + b;
					bl = false;
				}
			}, 30)
			var timer4 = setInterval(function() {
				c += 347;
				if(c == 3817) {
					clearInterval(timer4)
				} else {
					calendarSpan[2].innerHTML = 20000 + c;
					bl = false;
				}
			}, 80)
		}
	}
	var project = document.getElementsByClassName("project")[0]
	var manue = document.getElementsByClassName("manue")[0]
	var manueOl = document.getElementsByClassName("manueOl")[0];
	var manueWrap = project.getElementsByClassName("wrap")[0];
	var manueOlli = manueOl.getElementsByTagName("li");
	var wrapDiv = manueWrap.getElementsByTagName("div");
	var wrapSpan = manueWrap.getElementsByTagName("span")
	var timer6 = null;
	var n = 0;
	function move(itarget, related) {
		timer6 = setInterval(function() {
			n = n + 1;
			if(n === itarget.length) {
				n = 0;
			}
			for(var i = 0; i < itarget.length; i++) {
				itarget[i].className = ""
				related[i].className = ""
			}
			itarget[n].className = "on";
			related[n].className = "show";
		}, 4000)
	}
	move(manueOlli, wrapDiv)
	for(var i = 0; i < manueOlli.length; i++) {
		manueOlli[i].index = i;
		manueOlli[i].onclick = function() {
			for(var j = 0; j < manueOlli.length; j++) {
				manueOlli[j].className = ""
				wrapDiv[j].className = ""
			}
			manueOlli[this.index].className = "on"
			wrapDiv[this.index].className = "show"
			n = this.index;
		}
	}
	project.onmouseover = function() {
		clearInterval(timer6)
	}
	project.onmouseout = function() {
		move(manueOlli, wrapDiv)
	}

	var chact = document.getElementsByClassName("chact")[0];
	var chactForm = chact.getElementsByTagName("form")[0];
	var oIpt = chactForm.getElementsByTagName("input");
	var chactArea = chactForm.getElementsByTagName("textarea");
	var chactP = chactForm.getElementsByTagName("p");
	var pSpan = chactForm.getElementsByTagName("span")
	var div = chactForm.getElementsByTagName("div")[2]
	var alert1 = document.getElementById("alert1")
	var alert2 = document.getElementById("alert2")
	var str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
	for(var i = 0; i < 4; i++) {
		div.innerText += str.charAt(Math.floor(Math.random() * 62))
	}
	div.onclick = function() {
		div.innerText = ""
		for(var i = 0; i < 4; i++) {
			div.innerText += str.charAt(Math.floor(Math.random() * 62))
		}
	}

	function forbid(obj, num) {
		obj[num].onclick = function() {
			if(oIpt[1].value == "") {
				pSpan[0].style.display = "block"
			} else {
				pSpan[0].style.display = "none"
			}
			if(oIpt[2].value == "") {
				pSpan[1].style.display = "block"
			} else {
				pSpan[1].style.display = "none"
			}
			if(chactArea.value == "") {
				pSpan[2].style.display = "block"
			} else {
				pSpan[2].style.display = "none"

			}
			if(oIpt[4].value == "") {
				pSpan[3].style.display = "block"
			} else {
				pSpan[3].style.display = "none"
			}
		}
	}
	forbid(oIpt, 1)
	forbid(oIpt, 2)
	forbid(oIpt, 3)
	forbid(oIpt, 4)
	forbid(chactArea, 0)
	oIpt[5].onclick = function() {
		if(oIpt[1].value == "") {
			pSpan[0].style.display = "block"
		} else {
			pSpan[0].style.display = "none"
		}
		if(oIpt[2].value == "") {
			pSpan[1].style.display = "block"
		} else {
			pSpan[1].style.display = "none"
		}
		if(chactArea.value == "") {
			pSpan[2].style.display = "block"
		} else {
			pSpan[2].style.display = "none"

		}
		if(oIpt[4].value == "") {
			alert2.style.display = "block"
			pSpan[3].style.display = "block"
		} else {
			alert2.style.display = "none"
			pSpan[3].style.display = "none"
		}
		if(oIpt[4].value !== div.innerText && oIpt[4].value !== "") {
			alert1.style.display = "block"
		} else {
			alert1.style.display = "none"
		}
	}

	var friendLink = document.getElementsByClassName("friendLink")[0];
	var fDd = friendLink.getElementsByTagName("dd")[0];
	var fBtn = friendLink.getElementsByTagName("button")[0];
	var c = 0
	fBtn.onclick = function() {
		c++;
		if(c == 2) {
			c = 0
			startMove(fDd, {
				"height": 30
			})

		} else {
			startMove(fDd, {
				"height": 90
			})

		}
	}

}
$(function() {
			$(".theme").eq(2).mouseover(function(){
				alert(1)
			})
	
	$(window).scroll(function() {
		if($(window).scrollTop() > 100) {
			$(".theme").eq(0).addClass("animated fadeInUp")
			$(".develop>ul").addClass("animated fadeInUp")
		}
		if($(window).scrollTop() > 300) {
			$(".develop>ul>li").eq(0).css("left", "0px");
			$(".develop>ul>li").eq(0).addClass("animated fadeInLeft");
			$(".develop>ul>li").eq(1).css("top", "0px");
			$(".develop>ul>li").eq(1).addClass("animated fadeInUp");
			$(".develop>ul>li").eq(2).css("right", "0px");
			$(".develop>ul>li").eq(2).addClass("animated fadeInRight");
		}
		if($(window).scrollTop() > 600) {
			$(".theme").eq(1).addClass("animated fadeInUp")
			$(".project").addClass("animated fadeInUp")
		}
		if($(window).scrollTop() > 1300) {
			$(".theme").eq(2).addClass("animated fadeInUp")
			$(".cp").addClass("animated fadeInUp")
			var dataImg1 = [{
					"src": "images/ic1.jpg",
					"title": "大爱有声"
			},{
					"src": "images/ic2.jpg",
					"title": "家事无忧"
				},{
					"src": "images/ic3.jpg",
					"title": "osnic"
				},{
					"src": "images/ic4.jpg",
					"title": "德富塑料网"
				},{
					"src": "images/ic5.jpg",
					"title": "丰盈掌上超市"
				},{
					"src": "images/ic6.jpg",
					"title": "六中生殖"
				},{
					"src": "images/ic7.jpg",
					"title": "房旺旺"
				},{
					"src": "images/ic8.jpg",
					"title": "骑客圈"
				},{
					"src": "images/ic9.jpg",
					"title": "聚模网"
				},{
					"src": "images/ic10.jpg",
					"title": "狐狸精"
				},{
					"src": "images/ic11.jpg",
					"title": "悍高"
				},{
					"src": "images/ic12.jpg",
					"title": "珂洛丽"
				},{
					"src": "images/ic13.jpg",
					"title": "家具实体店导购"
				},{
					"src": "images/ic14.jpg",
					"title": "易骑商城APP"
				},{
					"src": "images/ic15.jpg",
					"title": "油灵"
				},{
					"src": "images/ic16.jpg",
					"title": "新车评"
				},{
					"src": "images/ic17.jpg",
					"title": "有猴"
				},{
					"src": "images/ic18.jpg",
					"title": "粤海"
				},{
					"src": "images/ic19.jpg",
					"title": "有货啦"
				},{
					"src": "images/ic20.jpg",
					"title": "酒联网"
				},{
					"src": "images/ic21.jpg",
					"title": "月亮小屋"
				},{
					"src": "images/ic22.jpg",
					"title": "广州市粤志照明电器有限公司"
				},{
					"src": "images/ic23.jpg",
					"title": "广州卡丝生物科技有限公司"
				},{
					"src": "images/ic24.jpg",
					"title": "中恒控股置业有限公司"
				},{
					"src": "images/ic25.jpg",
					"title": "戴瑞珠宝"
				},{
					"src": "images/ic26.jpg",
					"title": "佰潮网"
				},{
					"src": "images/ic27.jpg",
					"title": "虎门客运港"
				},{
					"src": "images/ic28.jpg",
					"title": "李小龙乐园"
				},{
					"src": "images/ic29.jpg",
					"title": "互联宝商城"
				},{
					"src": "images/ic30.jpg",
					"title": "巴德士会员俱乐部"
				},{
					"src": "images/ic31.jpg",
					"title": "创维芒果台网站建设项目"
				},{
					"src": "images/ic32.jpg",
					"title": "唯品会买手大赛网站建设项目"
				},{
					"src": "images/ic33.jpg",
					"title": "安利新年海报网站建设项目"
				},{
					"src": "images/ic34.jpg",
					"title": "VIVO X5网站建设项目"
				}, {
					"src": "images/ic35.jpg",
					"title": "案例胡子网站建设项目"
				},{
					"src": "images/ic36.jpg",
					"title": "钱来网网站建设项目"
				},{
					"src": "images/ic37.jpg",
					"title": "VIVO X6抽奖网站建设项目"
				},{
					"src": "images/ic38.jpg",
					"title": "广州方圆房地产发展有限公司网站建设项目"
				},{
					"src": "images/ic39.jpg",
					"title": "唯品会网站建设项目"
				},{
					"src": "images/ic40.jpg",
					"title": "Boss驾到网站建设项目"
				},{
					"src": "images/ic41.jpg",
					"title": "Boss驾到网站建设项目"
				},{
					"src": "images/ic42.jpg",
					"title": "唯品会换装网站建设项目"
				},{
					"src": "images/ic43.jpg",
					"title": "安利二次元新年祝福网站建设项目"
				},{
					"src": "images/ic44.jpg",
					"title": "安利互动minisite网站建设项目"
				},{
					"src": "images/ic45.jpg",
					"title": "每日每加双11h5发布网站建设项目"
				},
				{
					"src": "images/ic46.jpg",
					"title": "雷士光电科技有限公司"
				},
				{
					"src": "images/ic47.jpg",
					"title": "广豪镁铝业股份有限公司"
				},
				{
					"src": "images/ic48.jpg",
					"title": "羊城生活圈"
				},
				{
					"src": "images/ic49.jpg",
					"title": "Osnic官方商城"
				},
				{
					"src": "images/ic50.jpg",
					"title": "mo&co"
				},
				{
					"src": "images/ic51.jpg",
					"title": "广州市诗尼曼家居有限公司"
				},{
					"src": "images/ic52.jpg",
					"title": "广州市石头果贸易有限公司"
				},
				{
					"src": "images/ic53.jpg",
					"title": "广州德威堡酒业有限公司"
				},
				{
					"src": "images/ic54.jpg",
					"title": "广州倍安捷建筑科技有限公司"
				},
				{
					"src": "images/ic55.jpg",
					"title": "广州中赞国际货运代理有限公司"
				},
				{
					"src": "images/ic56.jpg",
					"title": "广州宝迪讯贸易有限公司"
				},
				{
					"src": "images/ic57.jpg",
					"title": "广州市喜悦教育资讯公司"
				},
				{
					"src": "images/ic58.jpg",
					"title": "中山市伟豪成衣行"
				},
				{
					"src": "images/ic59.jpg",
					"title": "广州侨睿国际贸易有限公司广州"
				},
				{
					"src": "images/ic60.jpg",
					"title": "广州天泓室内设计有限公司"
				},
				{
					"src": "images/ic61.jpg",
					"title": "深圳市鑫日科在线教育股份有限公司"
				},
				
				{
					"src": "images/ic62.jpg",
					"title": "深圳感通科技有限公司"
				},{
					"src": "images/ic63.jpg",
					"title": "广东艾时代生物科技有限责任公司"
				},
				{
					"src": "images/ic64.jpg",
					"title": "广州市尤菲服饰有限公司"
				},
				{
					"src": "images/ic65.jpg",
					"title": "广东省重工建筑设计院有限公司"
				}
			];
			var str1 = ""
			for(var i = 0; i < 20; i++) {
				str1 += '<li><div><img src="' + dataImg1[i].src + '" alt="" title="' + dataImg1[i].title + '" /></div><p>' + dataImg1[i].title + '</p></li>'				
			}
			$(".cp>ul").eq(0).html(str1)
			var str2 = ""
			for(var i = 20; i < 35; i++) {
				str2 += '<li><div><img src="' + dataImg1[i].src + '" alt="" title="' + dataImg1[i].title + '" /></div><p>' + dataImg1[i].title + '</p></li>'				
			}
			$(".cp>ul").eq(1).html(str2)
			var str3 = ""
			for(var i = 30; i < 45; i++) {
				str3 += '<li><div><img src="' + dataImg1[i].src + '" alt="" title="' + dataImg1[i].title + '" /></div><p>' + dataImg1[i].title + '</p></li>'				
			}
			$(".cp>ul").eq(2).html(str3)
			var str4 = ""
			for(var i = 45; i < 65; i++) {
				str4 += '<li><div><img src="' + dataImg1[i].src + '" alt="" title="' + dataImg1[i].title + '" /></div><p>' + dataImg1[i].title + '</p></li>'				
			}
			$(".cp>ul").eq(3).html(str4)
		}
		$(".cp>ul>li").mouseover(function(){
			$(this).children().children("img").css("transform","scale(1.1)")
			$(this).children("p").css("backgroundColor","#f1f1f1")
		}).mouseout(function(){
			$(this).children().children("img").css("transform","scale(1)")
			$(this).children("p").css("backgroundColor","#fff")
		
		})
		if($(window).scrollTop() > 2200) {
			$(".theme").eq(3).addClass("animated fadeInUp")
			$(".advantage>.center").addClass("animated fadeInUp")
		}
		if($(window).scrollTop() > 2900) {
			$(".new").addClass("animated fadeInUp")
			$(".b-xian>span").css("width","100%")
			$(".b-xian>i").css("transform","scale(1)")
			$(".b-xian>em").css("height","100px")
			$(".b-sz>ul").css("bottom","0px")
		}
		if($(window).scrollTop() > 4000) {
			$(".chact").addClass("animated fadeInUp")
		}
	})
	/*解决方案*/
	for(var i = 0; i < $(".csol>li").length; i++) {
		$(".csol>li").eq(i).mouseover(function() {
			var a = $(".csol>li").index(this)
			$(this).css("backgroundColor", "#f1f1f1").siblings("li").css("backgroundColor", "#fff")
			$(".cp>ul").eq(a).addClass("show").siblings().removeClass("show")
		})

		for(var j = 0; j < $(".cp img").length; j++) {
			$(".cp img").eq(j).mouseover(function() {
				var b = $(".cp img").index(this)
				$(this).css("transform", "scale(1.1)").parents(".cp>ul>li").siblings().children().children("img").css("transform", "scale(1)")
				$(".cp p").eq(b).css("backgroundColor", "#f1f1f1").parent(".cp>ul>li").siblings().children("p").css("backgroundColor", "#fff");
			})
		}
	}
	for(var i = 0; i < $(".bt>span").length; i++) {
		$(".bt>span").eq(i).mouseover(function() {
			var a = $(".bt>span").index(this) + 1
			$(this).addClass("bg1").siblings().removeClass("bg1")
			$(".Team>div").eq(a).addClass("show").siblings().removeClass("show")
		})
		for(var j = 1; j < $(".Team img").length; j++) {
			$(".Team img").eq(j).mouseover(function() {
				$(this).css("transform", "scale(1.1)").parents(".Team>div>ul>li").siblings().children().children("img").css("transform", "scale(1)")
			})
			$(".Team img").eq(13).mouseover(function() {
				$(this).css("transform", "scale(1)")
			})
		}
	}
	for(var i = 0; i < $(".messOl>li").length; i++) {
		$(".messOl>li").eq(i).mouseover(function() {
			var a = $(".messOl>li").index(this)
			$(".mess>div").eq(a).addClass("show").siblings().removeClass("show")
		})
		$(".mess .more").eq(i).mouseover(function() {
			$(this).children().children("img").css("marginLeft", "-10px").parent().siblings().children("a").children().children("img").css("marginLeft", "-110px")
		}).mouseout(function() {
			$(this).children().children("img").css("marginLeft", "-110px")
		})
		$(".case-bottom>div>span").eq(0).mouseover(function() {
			$(this).children("img").css("marginLeft", "-54px")
		}).mouseout(function() {
			$(this).children("img").css("marginLeft", "0px")
		})
		$(".case-bottom>div>span").eq(0).click(function(){
			$(".cp>ul").css("left","-1345px")
			$(".cp>ul").eq(1).css("left","0px")
		})
		$(".case-bottom>div>span").eq(2).click(function(){
			$(".cp>ul").css("left","0px")	
		})
		$(".case-bottom>div>span").eq(1).mouseover(function() {
			$(this).children("img").css("marginTop", "0px")

		}).mouseout(function() {
			$(this).children("img").css("marginTop", "-54px")
		})
		$(".case-bottom>div>span").eq(2).mouseover(function() {
			$(this).children("img").css("marginLeft", "-20px")
		}).mouseout(function() {
			$(this).children("img").css("marginLeft", "-80px")
		})		
	}
	$(".inline2>.one").click(function(){
		$(this).css("display","none")
		$(".serve").css("display","block")
	})
	$(".serve").click(function(){
		$(this).css("display","none")
		$(".inline2>.one").css("display","block")
	})
})