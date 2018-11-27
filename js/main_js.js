$(function(){ 
$(window).scroll(function(){ 
if ($(this).scrollTop()!=0 && $(window).width()>576) { 
$('.btn-up').fadeIn(); 
}
else{ 
$('.btn-up').fadeOut(); 
} 
}); 
$('.btn-up').click(function(){ 
$('body,html').animate({scrollTop:0},500); 
}); 
}); 

$(function() { 
$('a[href="#scroll"]').click(function(event) { 
event.preventDefault() 
var el = $('.block-scroll'); 
$('body,html').animate({ 
scrollTop: $(el).offset().top 
}, 1000); 
}); 
}); 

