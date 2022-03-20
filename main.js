const swiper = new Swiper('.swiper', {
  slidesPerView: 3,
  loop: true,
  /*pagination: {
    el: '.swiper-pagination'
  },*/
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
})
