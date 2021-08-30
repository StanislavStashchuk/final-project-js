let btn = document.querySelector("#closets-btn");
let sidebar = document.querySelector(".closets-sidebar");

btn.onclick = function() {
    sidebar.classList.toggle("active");
}

$(document).ready(function(){
    $('.closets-gallary__slader').slick({
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