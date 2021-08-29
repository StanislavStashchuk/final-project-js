let btn = document.querySelector("#mirror-btn");
let sidebar = document.querySelector("#mirror-sidebar");

btn.onclick = function() {
    sidebar.classList.toggle("act");
}

$(document).ready(function(){
    $('.mirror-gallary__slader').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        mobileFirst: false,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: true,
              centerMode: true,
              centerPadding: '50px',
              slidesToShow: 3
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: true,
              centerMode: true,
              centerPadding: '50px',
              slidesToShow: 1
            }
          }
        ]
      });
  });