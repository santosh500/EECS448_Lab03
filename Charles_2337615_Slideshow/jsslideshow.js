var photos=new Array(5);
photos[0]="bronco.jpg";
photos[1]="dolphin.png";
photos[2]="chief.png";
photos[3]="viking.png";
photos[4]="bengal.png";


var a=0;
function next1()
{
  	if(a==4)
	{
		a=0;
	}
	else
	{
		a=a+1;
	}
  document.broncoId.src=photos[a];
}

function prev()
{
	if(a==0)
	{
		a=4;
	}
	else
	{
		a=a-1;
	}
	document.broncoId.src=photos[a];
}


