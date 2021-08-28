let btn = document.querySelector("#mirror-btn");
let sidebar = document.querySelector("#mirror-sidebar");

btn.onclick = function() {
    sidebar.classList.toggle("act");
}