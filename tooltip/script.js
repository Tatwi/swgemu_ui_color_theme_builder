/*
	id (string) – id of the tooltip
	top (integer) – number of pixels to offset the tooltip from the top of the cursor
	left (integer) – offset to the right of the cursor
	maxw (integer) – maximum width in pixels of the tooltip
	speed (integer) – value to increment the tooltip opacity during transition
	timer (integer) – represents the speed at which the fade function in performed
	endalpha (integer) – target opacity of the tooltip
	alpha (integer) – current alpha of the tooltip
	tt, t, c, b, h – these represent global variables to be set later
	ie (boolean) – global variable based on browser vendor
*/

var tooltip=function(){
	var id = 'tt';
	var top = 10; // The default value was 3.
	var left = 3;
	var maxw = 300; // The default value was 400.
	var speed = 10;
	var timer = 20;
	var endalpha = 100; // Made tooltips opaque.
	var alpha = 0;
	var tt,t,c,b,h;
	var ie = document.all ? true : false;
	return{
		show:function(v,w){
			/*
				Takes two parametere, the content string and an optional width integer. 
				To begin, it will need to check and see if the tooltip has been added to the DOM yet. 
				If it does not exist the divs need to be built and added to the body. Either way the 
				innerHTML of the contentdiv will need to be set to the content parameter, the height 
				and width set and the fade function set to a timer.			
			*/
			if(tt == null){
				tt = document.createElement('div');
				tt.setAttribute('id',id);
				t = document.createElement('div');
				t.setAttribute('id',id + 'top');
				c = document.createElement('div');
				c.setAttribute('id',id + 'cont');
				b = document.createElement('div');
				b.setAttribute('id',id + 'bot');
				tt.appendChild(t);
				tt.appendChild(c);
				tt.appendChild(b);
				document.body.appendChild(tt);
				tt.style.opacity = 0;
				tt.style.filter = 'alpha(opacity=0)';
				document.onmousemove = this.pos;
			}
			tt.style.display = 'block';
			c.innerHTML = v;
			tt.style.width = w ? w + 'px' : 'auto';
			if(!w && ie){
				t.style.display = 'none';
				b.style.display = 'none';
				tt.style.width = tt.offsetWidth;
				t.style.display = 'block';
				b.style.display = 'block';
			}
			tt.offsetWidth = 300; // I added this to force the tool tip size to 300px.
			if(tt.offsetWidth >= maxw){tt.style.width = maxw + 'px'} // Made this greater than or equal to.
			h = parseInt(tt.offsetHeight) + top;
			clearInterval(tt.timer);
			tt.timer = setInterval(function(){tooltip.fade(1)},timer);
		},
		pos:function(e){
			/*
				Set the top and left values of the tooltip as the cursor moves. 
				First we calculate the position based on the browser and then we 
				set the values taking into consideration the global offset variables.
			*/
			var u = ie ? event.clientY + document.documentElement.scrollTop : e.pageY;
			var l = ie ? event.clientX + document.documentElement.scrollLeft : e.pageX;
			// I added the following conditions to prevent the tooltip from going off the screen to the right and top.
			// If the cursor position is 50px or less from the top of the page, then the tool tip pops out to the bottom instead of the top.
			if (u <= 50){
				tt.style.top = (u - h + 70) + 'px';
			}	
			else{
				tt.style.top = (u - h) + 'px';		
			}
			// If the cursor position is 700px or more to the left, then the tool tip pops out to the left instead of the right.
			if (l >= 724){
				tt.style.left = ((l - 320) + left) + 'px';
			}			
			else{
				tt.style.left = (l + left) + 'px';
			}

		},
		fade:function(d){
			/*
				Fades the tooltip from its current opacity to the target opacity based on the direction variable that is passed to it.
			*/
			var a = alpha;
			if((a != endalpha && d == 1) || (a != 0 && d == -1)){
				var i = speed;
				if(endalpha - a < speed && d == 1){
					i = endalpha - a;
				}else if(alpha < speed && d == -1){
					i = a;
				}
				alpha = a + (i * d);
				tt.style.opacity = alpha * .01;
				tt.style.filter = 'alpha(opacity=' + alpha + ')';
			}else{
				clearInterval(tt.timer);
				if(d == -1){tt.style.display = 'none'}
			}
		},
		hide:function(){
			/*
				Hides the tooltip onmouseout.
			*/
			clearInterval(tt.timer);
			tt.timer = setInterval(function(){tooltip.fade(-1)},timer);
		}
	};
}();