//JavaScript Functions
function _(id){ return document.getElementById(id) }

//change picture if scroll == n number of pixeli
window.addEventListener("scroll",function(){
	var a = _("one"),
		b = _("two"),
		c = _("three"),
		y = window.pageYOffset;
		if(y > 150){ a.innerHTML = '<img src="picture/bg1.png" width="400" /> <code>WELCOME</code>'; }
		else{ a.innerHTML = '<img src="picture/bg2.png" width="400" /> <code>WELCOME</code>'; }
		if(y > 900){ b.innerHTML = '<img src="picture/bg2.png" width="400" /> <code>WHO WE ARE</code>'; }
		else{ b.innerHTML = '<img src="picture/3.png" width="400" /> <code>WHO WE ARE</code>'; }
		if(y > 1800){ c.innerHTML = '<img src="picture/2.png" width="400" /> <code>WHAT WE DO</code>'; }
		else{ c.innerHTML = '<img src="picture/1.png" width="400" /> <code>WHAT WE DO</code>'; }
});

// Move background image on layers when you scroll a given number of pixels
// or browser window is less than or equal to a certain number of pixels
window.addEventListener("scroll",function(){
	var layer1 = _("layer1"),
		y = window.pageYOffset;
		if(y > 170){layer1.style.backgroundPosition = '-700px 0px';}
		else{layer1.style.backgroundPosition = '';}
		if(window.innerWidth < 1100 && y > 300){layer1.style.backgroundPosition = '0px -200px';}
		
	});

window.addEventListener("scroll",function(){
	var layer2 = _("layer2"),
		y = window.pageYOffset;
		if(y > 1000){layer2.style.backgroundPosition = '-700px 0px';}
		else{layer2.style.backgroundPosition = '';}
		if(window.innerWidth <= 1100 && y > 1100){layer2.style.backgroundPosition = '0px -200px';}
		
	});
	
window.addEventListener("scroll",function(){
	var layer3 = _("layer3"),
		y = window.pageYOffset;
		if(y > 1900){layer3.style.backgroundPosition = '-700px 0px';}
		else{layer3.style.backgroundPosition = '';}
		if(window.innerWidth <= 1100 && y > 2000){layer3.style.backgroundPosition = '0px -200px';}
		
	});	
	
window.addEventListener("scroll",function(){
	var layer4 = _("layer4"),
		y = window.pageYOffset;
		if(y > 2800){layer4.style.backgroundPosition = '0px -200px';}
		else{layer4.style.backgroundPosition = '';}
	});			