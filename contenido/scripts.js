// Alternar entre Modo Claro y Oscuro
const toggleButton = document.getElementById("toggleTheme");
toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    toggleButton.textContent = "Cambiar a Modo Claro";
  } else {
    toggleButton.textContent = "Cambiar a Modo Oscuro";
  }
});
