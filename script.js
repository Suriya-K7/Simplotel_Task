const toggleBtn = document.querySelector(".toggle__btn");

toggleBtn.addEventListener("click", () => {
  toggleBtn.classList.toggle("active");
  document.querySelector(".menu").classList.toggle("active");
});

const blurDiv = document.querySelectorAll(".blur__load");
blurDiv.forEach((div) => {
  const img = div.querySelector("img");

  function loaded() {
    div.classList.add("loaded");
  }
  if (img.complete) {
    loaded();
  } else {
    img.addEventListener("load", loaded);
  }
});
