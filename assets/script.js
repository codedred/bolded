//sticky nav
$(window).scroll(function(){
  if($(window).scrollTop() > 100) {
    $(".default-navbar").addClass("-fixed");    
  } else {
    $(".default-navbar").removeClass("-fixed");    
  }
});

//centered modal
$(function(){
  function reposition() {
    var modal = $(this),
        dialog = modal.find('.modal-dialog');
    modal.css('display', 'block');

    dialog.css("margin-top", Math.max(0, ($(window).height() - dialog.height()) / 2));
  }
  $('.modal').on('show.bs.modal', reposition);
  $(window).on('resize', function(){
    $('.modal:visible').each(reposition);
  });
});

//stop modal when closed
$(function(){
  $(".modal").on("hidden.bs.modal", function(){
    $('.modal iframe').attr("src", $(".modal iframe").attr("src"))
  });
})

