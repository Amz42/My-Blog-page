window.onload=function () {
	var information= document.getElementById("information");
	var d=new Date();
	var year=d.getFullYear();
	var date=d.getDate();
	var month=d.getMonth();
	if(date>=20 && month==11){ var age= year-2000;}
	else { var age= year-2001;}
	information.innerHTML="Hello!!! I'm Aman from Delhi,India. I'm "+age+" years old & pursuing graduation in B.tech (Information Technology) from ABES Engineering College,Ghaziabad,UP. I'm a passionate coder & learner. I have great interest in programming & development. I'm currently learning Full Stack Development & Data Analytics.";

	// Removing the loader
	setTimeout(() => {
		document.body.removeChild(document.getElementById("loader-container"))
	},2000);
}
