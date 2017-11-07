$(function(){
  //Blur background video on scroll
  $(window).on('scroll', function(){

      var s = $(window).scrollTop(),
          blurVal = (s/100);
          //opacityString = 'blur(' + opacityVal + 'px)'
    $(".video-background").css({"webkit-filter": "blur("+blurVal +"px)",
          "moz-filter":"blur("+blurVal +"px)",
         "ms-filter":"blur("+blurVal +"px)",
         "o-filter":"blur("+blurVal +"px)",
         "filter":"blur("+blurVal +"px)"});
  }); //End of blur method

  //Method to toggle menu cluster on click
  $(".toggler").on("click", function(){

    $(".menu").toggle();

  });//end toggle method

  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });

});
