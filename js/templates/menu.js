
APP.tpl.menu = data=>{
	console.log('tpl menu');

	let render = (obj)=>{
		console.log('tpl menu click render');

		let data = obj.val;

		let buttons = document.querySelectorAll('.menu-button');
		buttons.forEach(el=>el.style = '');
		obj.style = 'background:#fff; opacity:1; color:#00B6A3;';
		
		$lib.replaceObj(APP.tpl.header({day:data.day, fullDate:data.month+' '+data.date+', '+data.year+'.'}), APP.header)
		$lib.replaceObj(APP.tpl.content(data), APP.content)
	}

	let menu = {div:[], class:'menu'};

	for (var key in data) {
		menu.div.push({ val:data[key], div:[
									{div:[], class:'menu-content'}, 
									{div:[{p:data[key].date, style:'padding-top:12px;'},
									{p:data[key].dayShort}
									], class:'menu-button-text'}]
					, class:'menu-button', onclick:function(){render(this)}});
	}

	menu.div.push({p:'', style:'clear:both;'});

	return menu;
}