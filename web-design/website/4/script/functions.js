//JavaScript Functions
function _(id){ return document.getElementById(id) }

window.addEventListener("scroll",function(){
	var welcome = _("welcome"),
		product = _("product"),
		team	= _("team"),
		work	= _("work"),
		contact = _("contact"),
		y		= window.pageYOffset;
		
		if(y > 50){welcome.className = 'cool';welcome.style.color = '#f26531';}
		else{ welcome.className = 'none'; welcome.style.color = '';}
		
		if(y > 200){product.className = 'cool';product.style.color = '#f26531';}
		else{ product.className = 'none'; product.style.color = '';}
		
		if(y > 700){team.className = 'cool';team.style.color = '#f26531';}
		else{ team.className = 'none'; team.style.color = '';}		
		
		if(y > 1200){work.className = 'cool';work.style.color = '#f26531';}
		else{ work.className = 'none'; work.style.color = '';}
		
		if(y > 1700){contact.className = 'cool';contact.style.color = '#f26531';}
		else{ contact.className = 'none'; contact.style.color = '';}
});

// Activate the following line of code only to find out the position the mouse to the top
// edge of the HTML document and then uses IF considering the figures above.
// Use this code line items ONLY if the content exceeds the height that it has today.

//window.addEventListener("click",function(e){ var y = e.pageY; alert(y) });