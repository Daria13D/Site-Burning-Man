const burger = document.querySelector(".burger");
const menu = document.querySelector(".menu");
function burgerOpenBtn() {
  burger.addEventListener("click", () => {
    menu.classList.toggle("menu");
    menu.classList.toggle("active");
    menu.classList.toggle("menu");
  });
}
burgerOpenBtn();
