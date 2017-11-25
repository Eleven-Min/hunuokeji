//封装一个获取样式的函数
function getStyle(obj, name) {
	if(obj.currentStyle) {
		return obj.currentStyle[name];
	} else {
		return getComputedStyle(obj, false)[name];
	}
}
//运动函数
function startMove(obj, json, fnEnd) {
	//给每一个obj来一个timer
	//一上来先清空
	clearInterval(obj.timer);
	obj.timer = setInterval(function() {
		var bStop = true; //假设：所有值都已经到了
		for(var attr in json) {
			var cur = 0;
			if(attr == 'opacity') {
				cur = Math.round(parseFloat(getStyle(obj, attr)) * 100);
			} else {
				cur = parseInt(getStyle(obj, attr));
			}
			var speed = (json[attr] - cur) / 7;
			//减速运动速度必须向上向下取整
			speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
			if(cur != json[attr]) {
				bStop = false;
			}
			if(attr == 'opacity') {
				obj.style.filter = 'alpha(opacity:' + (cur + speed) + ')';
				obj.style.opacity = (cur + speed) / 100;
			} else {
				obj.style[attr] = cur + speed + 'px';
			}
		}
		if(bStop) {
			clearInterval(obj.timer);
			if(fnEnd) {
				fnEnd();
			}
		}
	}, 30);
}

var num = 0;
	var timer5 = null;
	function Interl1(obj1,obj2) {
		timer5 = setInterval(function() {
			num++;
			if(num === obj1.length) {
				num = 0;
			}
			for(var i = 0; i < obj1.length; i++) {
				obj1[i].className = ""
				obj2[i].className = ""
			}
			obj1[num].className = "bg1";
			obj2[num].className = "show";
		}, 6000)

		for(var i = 0; i < obj1.length; i++) {
			obj1[i].index = i;
			obj1[i].onmouseover = function() {
				for(var i = 0; i < obj1.length; i++) {
					obj1[i].className = ""
					obj2[i].className = ""
				}
				this.className = "bg1"
				obj2[this.index].className = "show"
				num = this.index
			}
		}
	}
