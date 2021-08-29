let btn = document.querySelector("#closets-btn");
let sidebar = document.querySelector(".closets-sidebar");

btn.onclick = function() {
    sidebar.classList.toggle("active");
}