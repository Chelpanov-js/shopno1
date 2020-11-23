let coll = document.getElementsByClassName('collapsible');
for (let i = 0; i < coll.length; i++) {
  coll[i].addEventListener('click', function() {
     this.classList.toggle('active');

     let content = this.nextElementSibling;
     if (content.style.maxHeight) {
      content.style.maxHeight = null;
     } else {
      content.style.maxHeight = content.scrollHeight + 'px'
     }
  })
};





var swiper = new Swiper('.swiper-container', {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 20,
        stretch: 0,
        depth: 200,
        modifier: 1,
        slideShadows: true,
      },
      loop:true
    });


$(function() {

  /*Fixed heder*/
  let header = $("#header");
  let intro = $("#intro");
  let introH = intro.height();
  let scrollPos = $(window).scrollTop();
  
  
  $(window).on("scroll", function() {
  
     scrollPos = $(this).scrollTop();
      header.addClass("fixed");
     if (scrollPos > introH) {
     
     }else {
            header.removeClass("fixed");
     }


  


  });


  /*slow scroll*/
  $("[data-scroll]").on("click", function(event){
    event.preventDefault();

    let elemetId = $(this).data('scroll');
    let elemetOffset = $(elemetId).offset().top;


    $("html,body").animate({
           scrollTop: elemetOffset
    }, 1000);
  });

  /*Works*/

  

  /*Reviews*/

  let slider = $("#reviewsSlider");

  slider.slick({
  	infinite: true,
  	slidesToShow:1,
  	slidesToScroll:1,
  	fade:true,
  	arrows:true,
  	dots: true
  });



});