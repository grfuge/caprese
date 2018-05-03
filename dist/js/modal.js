(function () {

  let gallery = document.querySelector(".gallery-overlay");
  let images = document.querySelectorAll(".modal");

  (function addEventListeners() {
    window.addEventListener("resize", checkSize);
    gallery.addEventListener("click", closeModal);
    images.forEach(function (image) {
      image.addEventListener("mouseover", function () {
        changeCursor(image);
      });
      image.addEventListener("click", function () {
        showModal(image);
      });
    });
  })();

  function changeCursor(image) {
    image.style.cursor = "zoom-in";
  }

  function showModal(image) {
    let imgIndex = image.src.indexOf("img/");
    let imgString = image.src.slice(imgIndex, image.src.length);
    if (imgString.indexOf("--prev")) {
      imgString = imgString.replace("--prev", "--full");
    }
    if (imgString.indexOf("--thumb")) {
      imgString = imgString.replace("--thumb", "--full");
    }
    gallery.style.display = "flex";
    gallery.innerHTML = `<img src="${imgString}" alt="">`;
    gallery.style.opacity = 0;
    setTimeout(function () {
      gallery.style.opacity = 1;
    }, 1)
  }

  function closeModal(e) {
    if (e.target.tagName === "IMG") return;
    gallery.style.opacity = 0;
    setTimeout(function () {
      gallery.style.display = "none";
    }, 100)
  }

  function checkSize(e) {
    if (window.innerWidth <= 568 && gallery.style.display === "flex") {
      closeModal(e);
    }
  }

})();