document.getElementById("navbar-toggler").onclick = function () {

  document.getElementById("nav-dropdown").classList.toggle("visibility-v");

  document.getElementById("header-menu").classList.toggle("b-shadow");

  document.getElementById("navbar-toggler").classList.toggle("fa-bars");

  document.getElementById("navbar-toggler").classList.toggle("fa-times");

  // if (document.getElementById("navbar-toggler").classList.contains("fa-bars") == true) {
  //   document.getElementById("navbar-toggler").classList.remove("fa-bars");
  //   document.getElementById("navbar-toggler").classList.add("fa-times");
  // } else {
  //   document.getElementById("navbar-toggler").classList.remove("fa-times");
  //   document.getElementById("navbar-toggler").classList.add("fa-bars");
  // }

};

