// Fix <select> innerHTML failed in ie
function selectBoxInnerHTML(select, htmlStr) {
	if(!XN.browser.IE) select.innerHTML = htmlStr;
	else {
		var div = document.createElement('div');
		div.innerHTML = '<select>'+htmlStr+'</select>';
		var optionList = Sizzle('option', div);
		select.options.length = 0; // 清除所有options
		for(var i = 0, len = optionList.length; i < len; i++) {
			select.appendChild(optionList[i]);
		}
	}
	return select;
}

// 获取下一个兄弟节点，处理ie和其他浏览器的兼容问题
function getNextSibling(startNode) {
	do startNode = startNode.nextSibling;
	while (startNode && startNode.nodeType != 1);
	return startNode;
}

/**
 * 引自
 * XN.form.js
 */
function formElementAutoComplete(id, type, tfo){
	var action = {
		'elem':'http://www.' + XN.env.domain + '/autocomplete_elementaryschool.jsp',
		'juni':'http://www.'+ XN.env.domain +'/autocomplete_juniorhighschool.jsp',
		'high':'http://www.'+ XN.env.domain +'/autocomplete_highschool.jsp',
		'univ':'http://www.'+ XN.env.domain +'/autocomplete_college.jsp',
		'work':'http://www.'+ XN.env.domain +'/autocomplete_workplace.jsp'
	};

	var ds = new XN.ui.DS_XHR({
		url:action[type]
	});
	
	var at = new XN.ui.autoCompleteMenu({
		DS:ds,
		input:id
	});

	at.buildMenu = function(r){
		return '<p>' + (r.name || r.Name) + '</p>';
	};
	at.addEvent('select',function(r){
		this.input.value = (r.name || r.Name);
		getNextSibling(this.input).value = r.id; // 获取id信息
		tfo.fireEvent('showNext', this.input);
	});
	
    return at;
};

// 初始化小学，公司自动完成
function initFormAutocomplete(tfo) {
	function addBlurEvent(ele) {
		XN.event.addEvent(ele, 'blur', function() {
			if(XN.string.trim(ele.value) != '') tfo.fireEvent('showNext', ele);
		});
	}

	if($('elementaryAC')) {
		formElementAutoComplete('elementaryAC', 'elem', tfo);
		addBlurEvent($('elementaryAC'));
	}
	if($('workplaceAC')) {
		formElementAutoComplete('workplaceAC', 'work', tfo);
		addBlurEvent($('workplaceAC'));
	}
}

// 获得对象的长度
function getObjectLength(obj) {
	var count = 0;
	for(i in obj) count++;
	return count;
};
object.define('xn/guide/DateManager', 'dom, events', function(require, exports) {
	var dom = require('dom'),
		events = require('events');

	// 时间日期管理对象
	var DM = {
		// 产生从start到end的顺序整数数组
		range: function (start, end) {
			var rge = [];
			if(end > start) {
				for(var i = 0, len = end-start+1; i < len; i++) {
					rge[i] = start+i;
				}
			} else if(end < start) {
				for(var len = start-end, i = len; i >= 0; i--) {
					rge[start-end-i] = i+end;
				}
			}
			return rge;
		},
		
		// 判断是否为闰年
		isLeapYear: function(year) {
			year = parseInt(year);
			if(year % 400 == 0) return true;
			else if (year % 4 == 0 && year % 100 != 0) return true;
			else return false;
		},
		
		// 年月日选择器
		getYMDOption: function(start, end, selectedIndex, defaultOption) {
			var ymdList = this.range(start, end),
				ymdOption = '<option>'+(defaultOption ? defaultOption : '请选择')+'</option>';
			ymdList.forEach(function(item, i) {
				if(selectedIndex && selectedIndex-1 == i) ymdOption += '<option selected="selected">'+item+'</option>';
				else ymdOption += '<option>'+item+'</option>';
			});
			return ymdOption;
		},
		
		getDayOption: function(month, year, selectedIndex) {
			switch(month) {
				case '1':
				case '3':
				case '5':
				case '7':
				case '8':
				case '10':
				case '12':
					return this.getYMDOption(1, 31, selectedIndex, '日');
				break;
				
				case '4':
				case '6':
				case '9':
				case '11':
					return this.getYMDOption(1, 30, selectedIndex, '日');
				break;
				
				case '2':
					if(year && this.isLeapYear(year)) return this.getYMDOption(1, 29, selectedIndex, '日');
					else return this.getYMDOption(1, 28, selectedIndex, '日');
				break;
			}
		},

		resetOption: function(defaultOption) {
			return '<option>' + (defaultOption ? defaultOption : '请选择') + '</option>';
		}
	};

	exports.DM = DM;

	exports.initYMDComponent = function(yearOpt, monthOpt, dayOpt) {
		this.yearOpt = yearOpt || $('birth-year');
		this.monthOpt = monthOpt || $('birth-month');
		this.dayOpt = dayOpt || $('birth-day');

		if(!this.yearOpt) return;

		
		XN.event.enableCustomEvent(this);
		this.init();
	}

	exports.initYMDComponent.prototype = {
		init: function() {
			selectBoxInnerHTML(this.yearOpt, DM.getYMDOption(2013, 1900, '', '年'));
			this.addYearEvent();
			this.addMonthEvent();
			this.bindYearEvent();
			this.bindMonthEvent();
		},

		// 添加年份自定义事件
		addYearEvent: function() {
			var _self = this;
			this.addEvent('yearChange', function(yearOpt) {
				if(yearOpt.selectedIndex == 0) {
					selectBoxInnerHTML(_self.monthOpt, DM.resetOption());
					selectBoxInnerHTML(_self.dayOpt, DM.resetOption());
				} else {
					selectBoxInnerHTML(_self.monthOpt, DM.getYMDOption(1, 12, _self.monthOpt.selectedIndex, '月'));
					_self.fireEvent('monthChange', _self.monthOpt);
				}
			});
		},

		// 添加月份自定义事件
		addMonthEvent: function() {
			var _self = this;
			this.addEvent('monthChange', function(monthOpt) {
				if(monthOpt.selectedIndex == 0) {
					selectBoxInnerHTML(_self.dayOpt, DM.resetOption('日'));
				} else {
					var monthVal = _self.monthOpt.options[_self.monthOpt.selectedIndex].innerHTML,
						yearVal = _self.yearOpt.options[_self.yearOpt.selectedIndex].innerHTML;
					selectBoxInnerHTML(_self.dayOpt, DM.getDayOption(monthVal, yearVal, _self.dayOpt.selectedIndex));
				}
			});
		},

		// 添加年份 change 事件
		bindYearEvent: function() {
			var _self = this;
			XN.event.addEvent(this.yearOpt, 'change', function(e) {
				var el = XN.event.element(e);
				_self.fireEvent('yearChange', el);
			});
		},

		// 添加月份 change 事件
		bindMonthEvent: function() {
			var _self = this;
			XN.event.addEvent(this.monthOpt, 'change', function(e) {
				var el = XN.event.element(e);
				_self.fireEvent('monthChange', el);
			});
		}
	}
});
object.define('xn/guide/Dimension', 'dom, events', function(require, exports) {
	var dom = require('dom'),
		events = require('events');

	exports.DIM = {
		// 获得Dom元素相对于document的位置
		getXY: function(ele) {
			var x = 0, y = 0;
			while(ele.offsetParent) {
				x += ele.offsetLeft;
				y += ele.offsetTop;
				ele = ele.offsetParent;
			}
			return {x:x, y:y};
		},

		// 获得滚动距离
		getScrollTop: function() {
			if(document.documentElement && document.documentElement.scrollTop) {
				return document.documentElement.scrollTop;
			} else {
				return document.body.scrollTop;
			}
		},
		
		// 获得视窗宽高
		getViewportHeight: function() {
			if(typeof window.innerWidth != 'undefined') {
				var viewportheight = window.innerHeight;
			} else if (typeof document.documentElement !== 'undefined' && typeof document.documentElement.clientWidth !== 'undefined' && document.documentElement.clientWidth != 0) {
				var viewportheight = document.documentElement.clientHeight;
			} else {
				var viewportheight = document.getElementsByTagName('body')[0].clientHeight;
			}
			return viewportheight;
		},
		
		// 获取文档的高度
		getDocumentHeight: function() {
			var body = document.body,
			    html = document.documentElement;

			return Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
		}
	}
});object.define('xn/guide/TipManager', 'dom, events, xn/guide/Dimension', function(require, exports) {
	var dom = require('dom'),
		events = require('events'),
		dim = require('xn/guide/Dimension');

	exports.Tip = function() {
		XN.event.enableCustomEvent(this);
		this.tip = $('tip');
		this.init();
	}

	exports.Tip.prototype = {
		init: function() {
			this.addShowtipEvent();
			this.addHidetipEvent();
			this.addHidetipFastEvent();
		},

		// 获取显示tip目标位置
		getTargetPosition: function(ele, type) {
			var d = dim.DIM.getXY(ele),
				x = d.x + ele.offsetWidth + 150,
				y = d.y;

			this.tip.style.left = x + 'px';
			this.tip.style.top = y + 'px';
			this.tip.setOpacity(0);
			this.tipShowAnimation(x, ele.getAttribute('data-tip'), type);

		},

		// 添加showTip自定义事件
		addShowtipEvent: function() {
			var _self = this;
			this.addEvent('showTip', function(ele, type) {
				if(!ele) return;
				_self.getTargetPosition(ele, type);
			})
		},

		// 添加hideTip自定义事件
		addHidetipEvent: function() {
			this.addEvent('hideTip', this.tipHideAnimation);
		},

		addHidetipFastEvent: function() {
			var _self = this;
			this.addEvent('hideTipFast', function() {
				_self.tip.style.display = 'none';
			});
		},


		// tip显示动画
		tipShowAnimation: function(positon, content, type) {
			var _self = this,
				motion = new XN.effect.Motion('easeOut', 200);
			this.tip.className = type == 'error' ? 'tip-error' : 'tip-focus';
			this.tip.innerHTML = '<div class="tip-bg">'+ content +'</div><b></b>';
			this.tip.style.display = 'block';
			motion.onTweening = function() {
				_self.tip.style.left = this.equation(positon, positon-135)+'px';
				_self.tip.setOpacity(this.equation(0, 1));
			};
			motion.start();
		},

		// tip隐藏动画
		tipHideAnimation: function() {
			var _self = this,
				motion = new XN.effect.Motion('easeOut', 250);
			
			motion.onTweening = function() {
				_self.tip.setOpacity(this.equation(1, 0));
			};
			motion.onComplete = function() {
				_self.tip.style.display = 'none';
			}
			motion.start();
		},

		getTip: function() {
			return this.tip;
		}
	}
});XN.dom.ready(function() {
	object.use('dom, events, xn/guide/DateManager, xn/guide/TipManager', function(dom, xn, dateManager, tipManager) {
		new dateManager.initYMDComponent();
		var tipM = new tipManager.Tip(); // 初始化tipManager

		// 表单验证
		var FV = {
			isEmpty: function(validationOption, type) {
				var isEmpty = false;
				switch(type) {
					case 'input':
						validationOption.forEach(function(item) {
							if(XN.string.trim(item.value) == '') isEmpty = true;
						});
						break;

					case 'select':
						validationOption.forEach(function(item) {
							if(item.selectedIndex == 0) isEmpty = true;
						});
						break;

					case 'radio':
						isEmpty = !(validationOption[0].checked || validationOption[1].checked);
						break;
				}
				return isEmpty;
			}
		};
		
		// 验证表单信息
		XN.event.addEvent($('guide-step1'), 'submit', function(e) {
			e.preventDefault();

			// 验证性别
			var gender = Sizzle('[name="sex"]');
			if(FV.isEmpty(gender, 'select')) {
				tipM.fireEvent('showTip', XN.element.parent(gender[0], 'dl'), 'error');
				return;
			}

			// 验证生日
			var birthday = Sizzle('[name^="birth"]');
			if(FV.isEmpty(birthday, 'select')) {
				tipM.fireEvent('showTip', XN.element.parent(birthday[0], 'dl'), 'error');
				return;
			}

			// 验证身份
			var identity = Sizzle('[name="stage"]');
			if(FV.isEmpty(identity, 'select')) {
				tipM.fireEvent('showTip', XN.element.parent(identity[0], 'dl'), 'error');
				return;
			}
			tipM.fireEvent('hideTipFast');
			$('guide-step1').submit();
		});
	});

});