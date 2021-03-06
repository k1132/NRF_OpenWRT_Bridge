function writeRGB(red,green,blue)
{
	//alert("R="+r+", G="+g+", B="+b);
	if (window.XMLHttpRequest)
	{// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp=new XMLHttpRequest();
	}
	xmlhttp.onreadystatechange=function()
	{
	  	if (xmlhttp.readyState==4 && xmlhttp.status==200)
	    {
			var data = new Array();
			data = xmlhttp.responseText.split('$');
			/*var red=data[1], green=data[2], blue=data[3];
			document.getElementById("updatedvalues").innerHTML="Red: " + red + ", Green: " + green + ", Blue:" + blue;
			setSlider(red,green,blue);*/
	    }
	}
	xmlhttp.open("GET","osc/RGBset.php?r="+escape(red)+"&g="+escape(green)+"&b="+blue,true);
	xmlhttp.send();	
}
			
function writeRF(RF)
{
	if(document.getElementById("rf1").checked) RF=RF+1;
	if(document.getElementById("rf2").checked) RF=RF+2;
	if(document.getElementById("rf3").checked) RF=RF+4;
				if (window.XMLHttpRequest)
	{// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp=new XMLHttpRequest();
	}
	xmlhttp.onreadystatechange=function()
	{
	  	if (xmlhttp.readyState==4 && xmlhttp.status==200)
	    {
			var data = new Array();	
	    }
	}
	xmlhttp.open("GET","osc/RFset.php?v="+RF,true);
	xmlhttp.send();	
}

function writeIR(IR)
{
				if (window.XMLHttpRequest)
	{// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp=new XMLHttpRequest();
	}
	xmlhttp.onreadystatechange=function()
	{
	  	if (xmlhttp.readyState==4 && xmlhttp.status==200)
	    {
			var data = new Array();	
	    }
	}
	xmlhttp.open("GET","osc/IRset.php?v="+IR,true);
	xmlhttp.send();	
}

function rgbToHsl(r, g, b) {
  r /= 255, g /= 255, b /= 255;

  var max = Math.max(r, g, b), min = Math.min(r, g, b);
  var h, s, l = (max + min) / 2;

  if (max == min) {
	h = s = 0; // achromatic
  } else {
	var d = max - min;
	s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

	switch (max) {
	  case r: h = (g - b) / d + (g < b ? 6 : 0); break;
	  case g: h = (b - r) / d + 2; break;
	  case b: h = (r - g) / d + 4; break;
	}

	h /= 6;
  }

  return [ h, s, l ];
}
					
function hslToRgb(h, s, l){
	var r, g, b;

	if(s == 0){
		r = g = b = l; // achromatic
	}else{
		function hue2rgb(p, q, t){
			if(t < 0) t += 1;
			if(t > 1) t -= 1;
			if(t < 1/6) return p + (q - p) * 6 * t;
			if(t < 1/2) return q;
			if(t < 2/3) return p + (q - p) * (2/3 - t) * 6;
			return p;
		}

		var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
		var p = 2 * l - q;
		r = hue2rgb(p, q, h + 1/3);
		g = hue2rgb(p, q, h);
		b = hue2rgb(p, q, h - 1/3);
	}

	return [r * 255, g * 255, b * 255];
}