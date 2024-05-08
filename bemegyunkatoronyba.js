const text = `A torony bejárata előtt álló óriási vasajtó megnyílt, mintha magától, és Kael belépett a sötét belső terekbe. A földszinti csarnok üres volt, csak egyetlen út vezetett lefelé, a sötét mélybe.`;

let currentText = '';
let index = 0;

function typeWriter() {
    if (index < text.length) {
        currentText += text.charAt(index);
        document.getElementById('typewriter-output').innerText = currentText;
        index++;
        setTimeout(typeWriter, 50); // 50 ms időzítés betűnként
    }
}

window.onload = function() {
    typeWriter();
};