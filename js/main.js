$(function(){
  $('.design-slider').slick ({
    dots: false,
    slidesToShow: 4,
    variableWidth: true,
    prevArrow: '<img class="arrow arrow-left" src="images/Arrow left.svg" alt="images">',
    nextArrow: '<img class="arrow arrow-right" src="images/Arrow right.svg" alt="images">',
    responsive: [
      {
        breakpoint: 361,
        setiings: {
          variableWidth: false,
          slidesToShow: 1
        }
      }
    ]
  });
});