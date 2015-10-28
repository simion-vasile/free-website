//JavaScript Functions

function _(id){ return document.getElementById(id) }

(function(){
	var s = _("s"),
		s1 = _("s1");
	s.addEventListener("click",function (){ s1.style.display = 'inline-block' });
	s1.addEventListener("mouseleave",function (){ this.style.display = 'none' });
})();

(function(){
	var hover = document.getElementsByClassName("hover")[0],
		arrow = _("arrow-down");
		arrow.addEventListener("click",function(){ hover.style.height = '350px' });
		hover.addEventListener("mouseout",function(){ hover.style.height = '0px' });
})();