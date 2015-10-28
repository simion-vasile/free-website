//JavaScript Functions
function _(id){ return document.getElementById(id) };

var x = document.getElementsByClassName("a")[0];
	x.addEventListener("click",function(){
		var y = document.getElementsByClassName("b")[0];
			y.style.display = "inline-block";
			y.addEventListener("mouseleave",function(){ y.style.display = 'none'; });
	});
	
//animate picture in div #right1 and animate text in div #right2
(function(){
	var p = [
		'candice1.jpg',
		'candice2.jpg',
		'candice3.jpg',
		'candice4.jpg',
		'candice5.jpg',
		'candice6.jpg',
		'candice7.jpg'
	],
		r1 = _("right1"),
		i = 0;
		function changePicture(){
			i++;
			if(i >= p.length){ i = 0 }
			r1.innerHTML = '<img width="300px" src="picture/candice/' + p[i] + '"' + ' />';
		}
		var int = setInterval(changePicture,2000);
		//r1.addEventListener("mouseenter",function(){ clearInterval(int) })
		//r1.addEventListener("mouseleave",function(){ setInterval(changePicture,2000) })
})();