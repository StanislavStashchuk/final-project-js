let btn = document.querySelector("#mdf-btn");
let sidebar = document.querySelector(".mdf-sidebar");

btn.onclick = function() {
    sidebar.classList.toggle("active");
}