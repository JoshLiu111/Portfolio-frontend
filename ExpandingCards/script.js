const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    replaceActiveClass();
    panel.classList.add("active");
  });
});

function replaceActiveClass() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}
