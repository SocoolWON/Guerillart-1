// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require_tree .
$(document).on('submit', '#login_form', function(e) {
    //do stuff here
    console.log("hi : "+ e);
}).on('ajax:success', '#login_form', function(e, data, status, xhr) {
    //do stuff here 
    console.log("hi1 : " +JSON.stringify(data) + ", @@@ "+JSON.stringify(status)+ ", @@@ "+ JSON.stringify(xhr));
    
    // $('.ui.basic.modal.signin').modal('hide');
    window.location.reload(true);
    
    // console.log("hi1 : "+data);
    // console.log("hi1 : ");
}).on('ajax:error', '#login_form', function(e, data, status, xhr) {
    //do stuff here
    console.log("hi2 : " +JSON.stringify(data) + ", @@@ "+JSON.stringify(status)+ ", @@@ "+ JSON.stringify(xhr));
    console.log(""+data.responseText);
    $('.footer#login_modal_footer').html('<div class="ui error message"><div class="header" id="login_error_msg">로그인 실패</div><p>' + data.responseText + '</p></div>');
    //$('#login_modal_footer').innerHTML = '<div class="ui error message"><div class="header" id="login_error_msg">로그인 실패</div><p>' + data.responseText + '</p></div>';
    
    
    
    // document.getElementById('start_signin_modal').onclick = function() {
	  // $('.ui.basic.modal.signin').modal('hide');
	// };
});


$(document).on('submit', '#register_form', function(e){
    //do stuff here
    console.log("hi3");
}).on('ajax:success', '#register_form', function(e, data, status, xhr) {
    //do stuff here
    console.log("hi4");
    
    window.location.reload(true);
}).on('ajax:error', '#register_form', function(e, data, status, xhr) {
	//do stuff here
	console.log("hi5 ? : " + JSON.stringify(data));
	$('.footer#signup_modal_footer').html('<div class="ui error message"><div class="header" id="signup_error_msg">회원가입 실패</div><p>' + data.responseText + '</p></div>');
	
	//오류 메시지들 
	//hi5 ? : {"readyState":4,"responseText":"{\"password\":[\"is too short (minimum is 6 characters)\"]}","responseJSON":{"password":["is too short (minimum is 6 characters)"]},"status":422,"statusText":"Unprocessable Entity "}
	//hi5 ? : {"readyState":4,"responseText":"{\"email\":[\"has already been taken\"],\"password_confirmation\":[\"doesn't match Password\"]}","responseJSON":{"email":["has already been taken"],"password_confirmation":["doesn't match Password"]},"status":422,"statusText":"Unprocessable Entity "}
	//hi5 ? : {"readyState":4,"responseText":"{\"email\":[\"has already been taken\"]}","responseJSON":{"email":["has already been taken"]},"status":422,"statusText":"Unprocessable Entity "}      
});


