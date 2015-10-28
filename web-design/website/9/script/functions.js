//JavaScript Functions

function _(id){ return document.getElementById(id) }

(function(){
	var btns = [
			btn1 = _("btn1"),
			btn2 = _("btn2"),
			btn3 = _("btn3"),
			btn4 = _("btn4")
		],
		s = _("slider"),
		img = [
			'woman.png',
			'woman1.png',
			'woman2.png',
			'woman3.png'
		],
		default_bg = '#e0dfdb',
		bg = '#353736',
		i = 0;
		
		function changePicture(){
			if(i >= img.length){
				i = 0;
				btns[1].style.background = default_bg;
				btns[2].style.background = default_bg;
				btns[3].style.background = default_bg;
			}
			if(btns[i]){ btns[i].style.background = bg }
			s.style.background = 'url(picture/' + img[i] + ')';
			i++;
		}
		var int = setInterval(changePicture,5000);
		
		btns[0].addEventListener("click", function(){
			s.style.background = 'url(picture/woman.png)';
			btns[0].style.background = bg;
			btns[1].style.background = default_bg;
			btns[2].style.background = default_bg;
			btns[3].style.background = default_bg;
		});
		btns[1].addEventListener("click", function(){
			s.style.background = 'url(picture/woman1.png)';
			btns[0].style.background = default_bg;
			btns[1].style.background = bg;
			btns[2].style.background = default_bg;
			btns[3].style.background = default_bg;
		});
		btns[2].addEventListener("click", function(){
			s.style.background = 'url(picture/woman2.png)';
			btns[0].style.background = default_bg;
			btns[1].style.background = default_bg;
			btns[2].style.background = bg;
			btns[3].style.background = default_bg;
		});
		btns[3].addEventListener("click", function(){
			s.style.background = 'url(picture/woman3.png)';
			btns[0].style.background = default_bg;
			btns[1].style.background = default_bg;
			btns[2].style.background = default_bg;
			btns[3].style.background = bg;
		});
})();

(function(){
	var lbtn = _("btn-left"),
		rbtn = _("btn-right"),
		p1	 = _("pictures1"),
		h2   = _("h2"); 
		lbtn.addEventListener("click",function(){
			p1.style.marginLeft = '-800px';
			h2.innerHTML = 'LAST MONTH WORK';
		})
		rbtn.addEventListener("click",function(){
			p1.style.marginLeft = '0px';
			h2.innerHTML = 'RECENT WORK';
		})
})();










