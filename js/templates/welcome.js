APP.tpl.welcome = data=>{	
	console.log('tpl welcome');
	
	let header = {div:[
					{div:[
						{h1:'Welcome!', class:'welcome-title'},
						{p:'Overview of your activity',  class:'welcome-subtitle' }
					]}
				], class:'welcome'};

	return  header;

}