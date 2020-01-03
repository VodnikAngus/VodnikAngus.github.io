let burgerState = false;
let burger = document.getElementById("burger");
let sidebar = document.getElementById("sidebar");

function toggleBurger(state = !burgerState) {
  burgerState = state;
  if (burger.classList.contains("active") && !burgerState) {
    burger.classList.remove("active");
    sidebar.classList.remove("active");
  }

  if (!burger.classList.contains("active") && burgerState) {
    burger.classList.add("active");
    sidebar.classList.add("active");
  }
}
