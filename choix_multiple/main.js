const iMax = 5;
let choix = document.querySelectorAll("input");

choix.forEach((element) => {
  element.addEventListener("click", function (e) {
    if (document.querySelectorAll("input:checked").length > iMax) {
      e.preventDefault();
    }
  });
});
