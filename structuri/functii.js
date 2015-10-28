function _(id){ return document.getElementById(id) }

//arata meniu fix sus
window.addEventListener("scroll",function(){
	var header_fix = _("header-fix"),
		top = window.pageYOffset;
		if(top > 120){ header_fix.style.display = 'inline'; }
		else{ header_fix.style.display = 'none'; }
});

//arata meniu nav
var nav = _("nav"),
	button = document.getElementsByTagName("button")[0];
	button.addEventListener("click",function(){
		nav.style.display = 'inline';
	});

//schimba titlul paginii la evenimentul blur
window.addEventListener("blur",function(){
	var text = [
		'Free WebSite',
		'Your Next WEB Page',
		'Choose Your Design'
	],
	original = document.title,
	title = document.getElementsByTagName("title")[0],
	i = 0;
	function arata(){
		i++;
		if( i >= text.length ){ i = 0; }
		title.innerHTML = text[i];
	}
	var interval = setInterval(arata, 1200);
	window.addEventListener("focus",function(){ clearInterval(interval); title.innerHTML = original });
});	