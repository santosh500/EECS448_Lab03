function pressbuttonBackground()
{
	var red2=document.getElementById("red1").value;
	var blue2=document.getElementById("blue1").value;
	var green2=document.getElementById("green1").value;
	
	var color1="#"+red2 + green2 + blue2;
	document.getElementById("para1").style.backgroundColor=color1;
	
}

function pressbuttonBorder()
{
	var red2=document.getElementById("red1").value;
	var blue2=document.getElementById("blue1").value;
	var green2=document.getElementById("green1").value;	
	var width2=document.getElementById("width1").value;
	
	var color4=red2+green2+blue2;
	document.getElementById("para1").style.borderColor=color4;
	document.getElementById("para1").style.borderWidths=width2;
}