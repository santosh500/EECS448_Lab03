function validate1()
{
   var passTag1 = document.getElementById('pass1').value;
   var passTag2 = document.getElementById('pass2').value;
   var a=0;
   if((passTag1.length < 8) || (passTag2.length <8))
   {
	   alert("The Passwords Are Not At Least 8 Characters Long")
   }
   else if(passTag1==passTag2)
   {
	   
		alert("Password Confirmed");
	   
	   
   }
   else
   {
	   alert("The Passwords Entered Don't Match");
   }
   
}