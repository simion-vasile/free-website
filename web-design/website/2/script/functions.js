//JavaScript Functions
function _(id){ return document.getElementById(id) };

var x = document.getElementsByClassName("a")[0];
	x.addEventListener("click",function(){
		var y = document.getElementsByClassName("b")[0];
			y.style.display = "inline-block";
			y.addEventListener("mouseleave",function(){ y.style.display = 'none'; });
	});