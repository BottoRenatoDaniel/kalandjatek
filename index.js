function goNext() {

    window.location.href = 'kezdolap.html';
}

const animatedRows = document.querySelectorAll('.animated-text');

const text = "Bottó Renátó Dániel | Dobos Krisztián";
const span = document.getElementById("typewriter-text");

const icon1 = `<a href="https://www.facebook.com/botto.renatodaniel/" target="_blank" class="facebook-icon"><i class="fab fa-facebook"></i></a>`;
const icon2 = `<a href="https://www.facebook.com/Krisz.dobos.75" target="_blank" class="facebook-icon"><i class="fab fa-facebook"></i></a>`;

let index = 0;

function typeEffect() {
    if (index < text.length) {
        span.textContent += text[index];
        index++;
        setTimeout(typeEffect, 100); // 100ms késleltetés karakterenként
    } else {
        // A nevek mellett jelenítjük meg az ikonokat
        const parts = text.split("|"); // A neveket elválasztjuk a "|"-nál
        span.innerHTML = `${parts[0]} ${icon1} | ${parts[1]} ${icon2}`; // Hozzáadjuk az ikonokat a megfelelő helyen
    }
}

typeEffect(); // Indítsd el az animációt