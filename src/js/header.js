(function () {
  let url = window.location.href;
  let pages = [
    "/index.php",
    "/about.php",
    "/menu.php",
    "/gallery.php",
    "/location.php"
  ]
  let pageIndex = 0;
  let headerItems = document.querySelectorAll(".header-item");

  pages.forEach(function (page, index) {
    if (url.indexOf(page) > 0) pageIndex = index;
    else return;
  })

  headerItems[pageIndex].style.textDecoration = "underline";
})();