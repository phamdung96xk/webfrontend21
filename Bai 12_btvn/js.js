$(document).ready(function(){
$('#button2').on('click',function(){
			

			var name = $('#userName-2').val();
			var password =$('#password-2').val();
			var confirm = $('#confirm-2').val();
			
			

			if (name == '')  {
				$('.error1').show();
				$('.account1').css('background-color','red');
			}else if(password != confirm) {
			
			$('.errorpass').show();
				
				
			}else if(password =='') {
				$('.error2').show();
				$('.account1').css('background-color','red');
			}else if(password.length<8) {
				$('.lengthpass').show();
			
			}else if (confirm == '') {
				$('.error3').show();
				$('.account1').css('background-color','red');
			}
			else {
				$('.lengthpass').hide();
				$('.label1').innerHTML ='';
				$('.div2').show(1000);
				$('.div1').hide(1000);
				$('.button3').show(1000);
				$('.button0').hide(1000);
				$('.account1').css('opacity','0.4');
				$('.profile1').css('opacity','1');
				$('.profile1').css('background-color','blue');
				$('.profile1').css('color','white');
				
				$('.account1').css('background-color','blue');
				
				
				return true;
			}
		})
$('.button1-1').on('click',function(){
				$('.div1').show();
				$('.div2').hide(1000);
				$('.button0').show(1000);
				$('.button3').hide(1000);
				$('.account1').css('background-color','blue');
				$('.account1').css('opacity','1');
				$('.profile1').css('background-color','blue');
				$('.profile1').css('opacity','0.4');

			
			})
	$('.button2-1').on('click',function(){
			var name2 = $('#name-2').val();
			var surname2 =$('#surname-2').val();
			var email2 = $('#email-2').val();
			var address2 = $('#address-2').val();
			var age2 = $('#age-2').val();
			var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/; 
			var age =/^([0,1,2,3,4,5,6,7,8,9])+$/;
			if (name2 == '') {
				$('.error4').show();
				$('.profile1').css('background-color','red');		
			}else if (surname2 == '') {
				$('.error5').show();
				$('.profile1').css('background-color','red');	
			}else if(age.test(name2)){
				$('.errorname2').show();
			}else if(age.test(surname2)){
				$('.errorname3').show();
			}else if(email2 =='') {
				$('.error6').show();
				$('.profile1').css('background-color','red');
			}else  if (!filter.test(email2))  {
				$('.erroremail').show();

			}else if(address2 =='') {
				$('.error7').show();
				$('.profile1').css('background-color','red');	
				}else if(age2 =='') {
				$('.error8').show();
				$('.profile1').css('background-color','red');	
			}else if(!age.test(age2)){
				$('.errorage').show();
			}else if(age2<18){
				$('.errorage2').show();
			}
			else {
				$('.erroremail').hide();
				$('.errorname2').hide();
				$('.errorname3').hide();
				$('.label3').innerHTML ='';
				$('.div3').show(1000);
				$('.div2').hide(1000);
				$('.button4').show(1000);
				$('.button3').hide(1000);
				$('.profile1').css('opacity','0.4');
				$('.warning1').css('opacity','1');
				$('.warning1').css('background-color','blue');
				$('.warning1').css('color','white');
				$('.profile1').css('background-color','blue');
			
			}
		})
	
	$('.button1-2').on('click',function(){
				$('.div2').show();
				$('.div3').hide(1000);
				$('.button3').show(1000);
				$('.button4').hide(1000);
				$('.account1').css('background-color','blue');
				$('.profile1').css('opacity','1');
				$('.profile1').css('background-color','blue');
				$('.warning1').css('opacity','0.4');

			
			})

		$('.button2-2').on('click',function(){
				
				$('.label3').innerHTML ='';
				$('.div4').show(1000);
				$('.div3').hide(1000);
				$('.button5').show(1000);
				$('.button4').hide(1000);
				$('.warning1').css('opacity','0.4');
				$('.finish1').css('opacity','1');
				$('.finish1').css('background-color','blue');
				$('.profile1').css('background-color','blue');
				$('.finish1').css('color','white');
				$('.finish1').css('opacity','1');
				
			})
		
		$('.button2-3').on('click',function(){
			var acceptTerms2 =$('#acceptTerms-2').val();
			if($('#acceptTerms-2').is(':checked')) {
					alert('Bạn đã đăng ký thành viên thành công.');
					$('.errorend').hide();
					window.location.replace("https://www.facebook.com/")
				}else {
					$('.errorend').show();
					alert('Đăng ký thất bại,vui lòng đồng ý các điều khoản trước khi kết thúc đăng ký.');
				}
		})
		$('.button1-3').on('click',function(){
				$('.div3').show(1000);
				$('.div4').hide(1000);
				$('.button4').show(1000);
				$('.button5').hide(1000);
				$('.warning1').css('background-color','blue');
				$('.warning1').css('opacity','1');
				$('.profile1').css('background-color','blue');
				$('.finish1').css('opacity','0.4');

			
			})
	})
		
		

			