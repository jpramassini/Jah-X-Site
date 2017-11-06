$(function(){
  //Blur backgroun video on scroll
  $(window).on('scroll', function(){

      var s = $(window).scrollTop(),
          blurVal = (s/100);
          //opacityString = 'blur(' + opacityVal + 'px)'
    $(".video-background").css({"webkit-filter": "blur("+blurVal +"px)",
          "moz-filter":"blur("+blurVal +"px)",
         "ms-filter":"blur("+blurVal +"px)",
         "o-filter":"blur("+blurVal +"px)",
         "filter":"blur("+blurVal +"px)"});
  });

  $(".toggle-nav").on("click", function(){

    $(".menu").toggle();

  });
  //end of Blur function
});
