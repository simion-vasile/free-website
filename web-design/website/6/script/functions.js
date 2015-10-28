//JavaScript Functions

function _(id){ return document.getElementById(id) }

(function(){
	var id = _("text-animate"),
		content = [
			'WEB <br /> DESIGNER',
			'FRONTEND <br /> DEVELOPER',
			'FRONTEND <br /> DEVELOPER'
		],
		i = 0;
		function changeText(){
			i++;
			if(i >= content.length){ i = 0 }
			id.innerHTML = content[i];
		}
		var interval = setInterval(changeText, 1500);
})();