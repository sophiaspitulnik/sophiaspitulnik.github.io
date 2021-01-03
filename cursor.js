let carrot = document.getElementById('carrot');

var width;
var height;


function updateSize()
{
	width = window.innerWidth;
	height = window.innerHeight;
}
updateSize()
window.onresize = updateSize;

const onMouseMove = (e) =>{
	carrot.style.zIndex = 10;

	carrot.style.left = Math.max(Math.min(e.pageX, width), 0) + 'px';
	carrot.style.top = Math.max(Math.min(e.pageY, height), 0) + 2 + 'px';
	console.log(e.pageX);
}

document.addEventListener('mousemove', onMouseMove);