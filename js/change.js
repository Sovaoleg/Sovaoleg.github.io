const listpoint = document.getElementsByClassName('listt');


for ( let i = 0; i < listpoint.length; i++)
{
	listpoint[i].onmouseover = function(){
		document.body.style.backgroundImage = "url('https://raw.githubusercontent.com/Sovaoleg/Sovaoleg.github.io/master/opt_img/bgeye.png')";
		document.getElementsByClassName('tree')[0].style.visibility='hidden';
		document.getElementsByClassName('main-bl')[0].style.display='none';
		document.getElementsByClassName('star')[0].style.display='none';
		document.getElementsByClassName('header')[0].style.visibility='hidden';
	}
	listpoint[i].onmouseout = function(){
		document.body.style.backgroundImage = "url('https://raw.githubusercontent.com/Sovaoleg/Sovaoleg.github.io/master/opt_img/main1.png')";
		document.getElementsByClassName('tree')[0].style.visibility='visible';
		document.getElementsByClassName('main-bl')[0].style.display='block';
		document.getElementsByClassName('star')[0].style.display='block';
		document.getElementsByClassName('header')[0].style.visibility='visible';
	}
}


