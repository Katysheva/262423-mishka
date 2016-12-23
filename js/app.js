function openMenu() {
  var menu = document.getElementById('top-nav');
  var menu_toggle = document.getElementById('menu-toggle');

  if (menu.className === "top-nav top-nav--no-js" || menu.className === "top-nav") {
    menu.className = "top-nav top-nav--show";
    menu_toggle.className += " header__toggle-button--close";
  } else {
    menu.className = "top-nav";
    menu_toggle.className = "header__toggle-button";
  }
}

(function($) {

  $(document).ready(function() {

    var overlay = $('#overlay');
    var open_modal = $('.open_modal');
    var close = $('#overlay');
    var modal = $('.modal-window');
    var body = $('body');

    open_modal.click( function(event){
      event.preventDefault();
      var div = $(this).attr('href');
      overlay.fadeIn(400,
        function(){
          $(div)
          .css('display', 'block')
          .animate({opacity: 1, top: '50%'}, 200);
        });
      $(body).css('overflow', 'hidden');
      $(modal).css('overflow', 'auto');
    });
    close.click( function(){
      modal
      .animate({opacity: 0, top: '45%'}, 200,
        function(){
          $(this).css('display', 'none');
          overlay.fadeOut(400);
        });
      $(body).css('overflow', 'auto');
    });


  })

})(jQuery)
