document.body.addEventListener('animationend', () => {
    const link = document.getElementById('nextPageLink');
    link.style.opacity = 1; // Fokozatos megjelenés
    link.classList.add("typewriter-effect"); // Gépelési animáció aktiválása
});