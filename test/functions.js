var topp = 0;
var bott = 0;
function travel(direction){
	switch (direction){
		case 'up':
			break;
		case 'down':
			topp = topp + 20;
			break;
		case 'left':
			break;
		case 'right':
			break;
	}
	document.getElementById('mario').style.top = topp + "px";
	
}
