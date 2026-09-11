// Show the current year in the footer
document.querySelectorAll(".year").forEach((element) => {
  element.textContent = new Date().getFullYear();
});
