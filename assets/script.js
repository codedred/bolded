$(window).scroll(function(){
  if($(window).scrollTop() > 100) {
    $(".default-navbar").addClass("-fixed");    
  } else {
    $(".default-navbar").removeClass("-fixed");    
  }
});
