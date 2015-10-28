//JavaScript Functions

function _(id){ return document.getElementById(id)}
//change background color on window browser
(function(){
	var m = _("m"),
		f = _("f"),
		value = _("number").value,
		body = document.getElementsByTagName("body")[0];
		
		m.addEventListener("click",function(){ body.style.background = '#2e5c80' })
		f.addEventListener("click",function(){ body.style.background = '#e5608d' })
		
})();
// alternate the color on window
(function(){
	var elm = _("number"),
		r = _("r"),
		body = document.getElementsByTagName("body")[0];
		elm.addEventListener("change",function(){
			body.style.background = '#' + elm.value;
			r.innerHTML = '#' + elm.value;
		});
		elm.addEventListener("blur",function(){ r.style.display = 'none' });
})();
//select the singer
(function(){
	var select = _("select"),
	    singer = _("singer"),
		value = _("select").value;
		select.addEventListener("change",function(){		//alert(value)
			if(value == "INNA"){
				var request = new XMLHttpRequest();
					request.open("GET","music/INNA/inna.html",false);
					request.send(null);
					singer.innerHTML = request.responseText;
			}
		    if(value == "Taylor-Swift"){
				var request = new XMLHttpRequest();
					request.open("GET","music/Taylor-Swift/Taylor-Swift.html",false);
					request.send(null);
					singer.innerHTML = request.responseText;
			}
			else{}
			
			
		});
})();
//move picture
(function(){
	var p1 = _("picture1"),
		p2 = _("picture2"),
		p3 = _("picture3"),
		s1 = _("space1"),
		s2 = _("space2"),
		s3 = _("space3"),
		cp = _("come-picture");
		
		//allow pictures to leave from the div parent
		s1.addEventListener("dragover",function(e){ e.preventDefault() })
		s2.addEventListener("dragover",function(e){ e.preventDefault() })
		s3.addEventListener("dragover",function(e){ e.preventDefault() })
		cp.addEventListener("dragover",function(e){ e.preventDefault() })
		
		//allow picture to leave
		p1.addEventListener("dragstart",function(e){ e.dataTransfer.setData("picture1", e.target.id) })
		p2.addEventListener("dragstart",function(e){ e.dataTransfer.setData("picture2", e.target.id) })
		p3.addEventListener("dragstart",function(e){ e.dataTransfer.setData("picture3", e.target.id) })
		
		//allow pictures to drop
		cp.addEventListener("drop",function(e){
			e.preventDefault();
			var img1 = e.dataTransfer.getData("picture1");
			e.target.appendChild(document.getElementById(img1));
		});
		cp.addEventListener("drop",function(e){
			e.preventDefault();
			var img2 = e.dataTransfer.getData("picture2");
			e.target.appendChild(document.getElementById(img2));
		})
		cp.addEventListener("drop",function(e){
			e.preventDefault();
			var img3 = e.dataTransfer.getData("picture3");
			e.target.appendChild(document.getElementById(img3));
		});
		
		//allow pictures to come back
		s1.addEventListener("drop",function(e){
			e.preventDefault();
			var img1 = e.dataTransfer.getData("picture1");
			e.target.appendChild(document.getElementById(img1));
		});
		s2.addEventListener("drop",function(e){
			e.preventDefault();
			var img2 = e.dataTransfer.getData("picture2");
			e.target.appendChild(document.getElementById(img2));
		})
		s3.addEventListener("drop",function(e){
			e.preventDefault();
			var img3 = e.dataTransfer.getData("picture3");
			e.target.appendChild(document.getElementById(img3));
		})
})();

//show the alert box if mouse is in the cool div
(function(e){
	var a = _("alert"),
		cp = _("come-picture"),
		cool = document.getElementsByClassName("cool")[0];
		cool.addEventListener("mouseenter",function(){ a.style.display = 'inline-block'; cp.style.border = '1px solid' })
		cool.addEventListener("mouseleave",function(){ a.style.display = 'none'; cp.style.border = 'none' })
})();















