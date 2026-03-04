const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");

if (hamburger && menu) {
  hamburger.addEventListener("click", () => {
    menu.classList.toggle("show");

    // (opsional) update aria-expanded
    const isOpen = menu.classList.contains("show");
    hamburger.setAttribute("aria-expanded", String(isOpen));
  });

  // Tutup menu setelah klik link (opsional, tapi enak)
  menu.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => menu.classList.remove("show"));
  });
}
