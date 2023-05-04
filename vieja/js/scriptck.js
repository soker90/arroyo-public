jQuery(document).ready(function($){
	
	var ckdiv = $(".cookieDiv").height();
	
	if ( ($.cookie('polcks') != null))	{
		$(".cookieDiv").css({"display" : "none"});
	}else{
		$(".cookieDiv").css({"display" : "inline"});
		$("body").css({"marginTop" : ckdiv});
	}
	
	$('.botonCookie').click(function(){
		$.cookie('polcks', 'si', { expires: 365, path: '/' });
		$(".cookieDiv").hide();
		$("body").css({"marginTop" : "0"});
	});
	
});
