const swiper = new Swiper('.swiper', {
  slidesPerView: 3, // Default for smaller screens
  spaceBetween: 30,
  loop: true, // Enables infinite scrolling
  autoplay: {        // Enable automatic slide transition
    delay: 2500,   // Delay between slides (in milliseconds)
    disableOnInteraction: false // Keep autoplay even after user interaction
},
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
  pagination: {
      el: '.swiper-pagination',
      clickable: true, // Allows user to click on pagination dots
  },
  breakpoints: {
      640: { 
          slidesPerView: 1, 
          spaceBetween: 20 
      },
      768: { 
          slidesPerView: 2, 
          spaceBetween: 30 
      },
      1024: { 
          slidesPerView: 3, // Shows 3 slides per view for desktops
          spaceBetween: 40 
      },
  },
});
