$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
    return false;
});

$('video').on('ended', function () {
	alert("whe");
  this.load();
  this.play();
});

function myFunction() {
    alert("Applications are coming soon!");
}

// $(document).ready(function(){

   // $("section").mouseenter(function(){
     // var id = $(this).attr('id');
     // $('.sidebar-item .sidebar-line').css({"width": "50%", "background": "#5D6771"});
     // var linename = "span#"+id+"-line.sidebar-line";
     // $(linename).css({"width": "100%", "background": "#1DB3E2"});
   // });

// });

$(document).ready(function(){
  // $sections incleudes all of the container divs that relate to menu items.
  var $sections = $('section');
  
  // The user scrolls
  $(window).scroll(function(){
    
    // currentScroll is the number of pixels the window has been scrolled
    var currentScroll = $(this).scrollTop();
    
    // $currentSection is somewhere to place the section we must be looking at
    var $currentSection
    
    // We check the position of each of the divs compared to the windows scroll positon
    $sections.each(function(){
      // divPosition is the position down the page in px of the current section we are testing      
      var divPosition = $(this).offset().top;
      
      // If the divPosition is less the the currentScroll position the div we are testing has moved above the window edge.
      // the -1 is so that it includes the div 1px before the div leave the top of the window.
      if( divPosition - 1 < currentScroll ){
        // We have either read the section or are currently reading the section so we'll call it our current section
        $currentSection = $(this);
        
        // If the next div has also been read or we are currently reading it we will overwrite this value again. This will leave us with the LAST div that passed.
      }
      if ($currentSection.attr('id') == "projects"){
        var id = $currentSection.attr('id');
        $('.sidebar-item .sidebar-line').css({"width": "50%", "background": "white"});
         $('.sidebarhover').css({"color": "white"});
        var linename = "span#"+id+"-line.sidebar-line";
        $(linename).css({"width": "100%", "background": "white"});
      }
      else {
      // This is the bit of code that uses the currentSection as its source of ID
     var id = $currentSection.attr('id');
     $('.sidebar-item .sidebar-line').css({"width": "50%", "background": "#5D6771"});
     var linename = "span#"+id+"-line.sidebar-line";
     $(linename).css({"width": "100%", "background": "#1DB3E2"});
     $('.sidebarhover').css({"color": "#1DB3E2"});
   }
      
    })

  });
});

(function($) {

  /**
   * Copyright 2012, Digital Fusion
   * Licensed under the MIT license.
   * http://teamdf.com/jquery-plugins/license/
   *
   * @author Sam Sehnert
   * @desc A small plugin that checks whether elements are within
   *     the user visible viewport of a web browser.
   *     only accounts for vertical position, not horizontal.
   */

  $.fn.visible = function(partial) {
    
      var $t            = $(this),
          $w            = $(window),
          viewTop       = $w.scrollTop(),
          viewBottom    = viewTop + $w.height(),
          _top          = $t.offset().top,
          _bottom       = _top + $t.height(),
          compareTop    = partial === true ? _bottom : _top,
          compareBottom = partial === true ? _top : _bottom;
    
    return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

  };
    
})(jQuery);

var win = $(window);

var allMods = $(".float-in");

allMods.each(function(i, el) {
  var el = $(el);
  if (el.visible(true)) {
    el.addClass("already-visible"); 
  } 
});

win.scroll(function(event) {
  
  allMods.each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("come-in"); 
    } 
  });
  
});

$(window).scroll(function () {
    var scrollTop = $(window).scrollTop();
    var height = $(window).height();
    $('#intro').css({
        'opacity': ((height - scrollTop) / height)
    });
});








