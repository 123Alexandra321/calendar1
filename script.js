const lunaAnul = document.getElementById("luna-anul");
const zileLuna = document.getElementById("zile-luna");

const dataAzi = new Date();
const luna = dataAzi.getMonth(); // 0-11
const anul = dataAzi.getFullYear();

const luniNume = [
  "Ianuarie", "Februarie", "Martie", "Aprilie", "Mai", "Iunie",
  "Iulie", "August", "Septembrie", "Octombrie", "Noiembrie", "Decembrie"
];

// Setăm titlul
lunaAnul.textContent = `${luniNume[luna]} ${anul}`;

// Câte zile are luna
const primaZi = new Date(anul, luna, 1);
const ultimaZi = new Date(anul, luna + 1, 0);
const totalZile = ultimaZi.getDate();

// Ziua săptămânii (0 = Duminică, 1 = Luni, etc.)
let startZi = primaZi.getDay();
if (startZi === 0) startZi = 7; // să înceapă cu Luni

// Spații goale înainte de ziua 1
for (let i = 1; i < startZi; i++) {
  zileLuna.innerHTML += `<div></div>`;
}

// Adăugăm zilele din lună
for (let zi = 1; zi <= totalZile; zi++) {
  const esteAstazi = 
    zi === dataAzi.getDate() &&
    luna === dataAzi.getMonth() &&
    anul === dataAzi.getFullYear();

  zileLuna.innerHTML += `<div class="${esteAstazi ? 'azi' : ''}">${zi}</div>`;
}

