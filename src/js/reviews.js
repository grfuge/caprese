(function () {

  let reviews = document.querySelectorAll(".review");
  let reviewIndex = 0;
  let button = {
    left: document.querySelectorAll(".reviews--arrows--button")[0],
    right: document.querySelectorAll(".reviews--arrows--button")[1],
  };

  (function addEventListeners() {
    button.left.addEventListener("click", previousReview);
    button.right.addEventListener("click", nextReview);
  })();

  function previousReview() {
    updateReview(0)
  }

  function nextReview() {
    updateReview(1)
  }

  function updateReview(next) {
    reviews[reviewIndex].style.opacity = 0;
    setTimeout(function () {
      reviews[reviewIndex].classList.remove("review__active");
      if (next === 1) {
        if (reviewIndex === reviews.length - 1) reviewIndex = 0;
        else reviewIndex++;
      } else {
        if (reviewIndex === 0) reviewIndex = reviews.length - 1;
        else reviewIndex--;
      }
      reviews[reviewIndex].classList.add("review__active");
      reviews[reviewIndex].style.opacity = 1;
    }, 200);
  }

})();