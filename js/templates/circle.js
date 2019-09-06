
	APP.tpl.circle = function(data){
		console.log('tpl circle');
		let circle = {div:[{...APP.tpl.icon(data), class:'icon-circle'}], class:'circle'};
		circle.div.push({tag:'br'},{p:'Steps', style:'font-size:20px;'},{h1:data.result.toLocaleString()});
		return  circle;
	}