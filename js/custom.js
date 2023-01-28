/* ===== Row Java Script ===== */

function myfocus(x){
    x.style.background="rgba(233, 239, 223, 0.81)";
}
function myValidation(){
	var name = document.forms['contactForm']['name'].value;
    var email = document.forms['contactForm']['email'].value;
    var mobile = document.forms['contactForm']['mobile'].value;
    var textarea = document.forms['contactForm']['textarea'].value;
	var error =[];
		if(name =='' || name.lenght<3){
			error[0]="Name must be at least 3 letters.";
            document.getElementById('name-error').innerHTML = error[0];
		}else{
            document.getElementById('name-error').innerHTML = '';
        }

        if(email =='' || email.lenght<10){
			error[1]="Enter valid email address.";
            document.getElementById('email-error').innerHTML = error[1];
		}else{
            document.getElementById('email-error').innerHTML = '';
        }

        if(mobile =='' ||mobile.lenght<11){
			error[2]="Enter valid mobile number.";
            document.getElementById('mobile-error').innerHTML = error[2];
		}else{
            document.getElementById('mobile-error').innerHTML = '';
        }

        if(textarea =='' || textarea.lenght<50){
			error[3]="Enter more details.";
            document.getElementById('textarea-error').innerHTML = error[3];
		}else{
            document.getElementById('textarea-error').innerHTML = '';
        }

        if(error.length>0){
            return false;
        }
}

/* ===== jQuery Start ===== */

$(document).ready(function(){
	/*-- main-manu ul li active Start --*/
	$('#main-manu').on('click','li',function(){
		$('#main-manu li.active').removeClass('active');
		$(this).addClass('active');
	});

	/*-- main-manu navbar Start --*/
	$('#mobile-icon').click(function(){
		$('#main-manu ul').slideToggle(1000);
	});
	
	$(window).resize(function(){
		if($(window).width() > 576){
			$('#main-manu ul').show();
		}else{
			$('#main-manu ul').hide();
		}
	});
	/*-- Upper Button Scroll Start --*/
	$(window).scroll(function(){
		var x = $(window).scrollTop();
		if(x > 600)
		{
			$('#upper').fadeIn(1000);
		}else{
			$('#upper').fadeOut(1000);
		}
	});
	$('#upper').click(function(){
		$('html').animate({scrollTop:0},2000);
	});	
});