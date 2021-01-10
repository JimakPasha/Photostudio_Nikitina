$(function () {

  $('.menu__btn').on('click', function (){
    $('.menu__list,.menu__btn,.header__content').toggleClass('active');
  });

  $(".menu a, .footer__links-list a").on("click", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
		top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 800);
  });
  

  $('.portfolio__item-slider-images').slick({
    prevArrow: '<button type="button" class="slick-prev"><img src="images/arrow-left.svg" alt="arrow-left"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="images/arrow-right.svg" alt="arrow-right"></button>',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          arrows: false,
          dots: true
        }
      }
    ]
  });

});