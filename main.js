document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("btn-toggle");
  const navbar = document.getElementById("navbar-default");

  toggleButton.addEventListener("click", function () {
    const isCollapsed = navbar.classList.contains("hidden");
    if (isCollapsed) {
      navbar.classList.remove("hidden");
    } else {
      navbar.classList.add("hidden");
    }
  });
});
