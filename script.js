const toggleBtn = document.querySelector(".toggle__btn");

toggleBtn.addEventListener("click", () => {
  toggleBtn.classList.toggle("active");
  document.querySelector(".menu").classList.toggle("active");
});
