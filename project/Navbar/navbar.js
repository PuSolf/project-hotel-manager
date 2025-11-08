document.addEventListener("DOMContentLoaded", () => {
  fetch("../Navbar/navbar.html")
    .then(res => res.text())
    .then(data => {
      const topbar = document.getElementById("navbar");
      topbar.innerHTML = data;
      topbar.classList.add("topbar");

      const hamburger = topbar.querySelector("#hamburger");
      const menu = topbar.querySelector(".menu");
      if (hamburger && menu) {
        hamburger.addEventListener("click", () => {
          menu.classList.toggle("show");
        });
      }
    });
});