// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Pienso en ti", time: 15 },
  { text: "Tu voz es mi canción", time: 18 },
  { text: "Mi corazón late por ti", time: 27 },
  { text: "Cuando me miras", time: 32 },
  { text: "Como luces de magia", time: 33 },
  { text: "¿Dónde estás? Te quiero aquí", time: 41 },
  { text: "Tomando fuerte tus manos", time: 47 },
  { text: "Iluminas mi noche gris", time: 54 },
  { text: "Soñando nuestro gran amor", time: 59 },
  { text: "Tus latidos", time: 67 },
  { text: "Me dan paz, me hacen vivir", time: 72 },
  { text: "Déjame quedarme a tu lado", time: 78 },
  { text: "Solo quiero amarte hoy", time: 83 },
  { text: "¿Dónde estás? Te quiero aquí", time: 91 },
  { text: "Tomando fuerte tus manos", time: 97 },
  { text: "Iluminas mi noche gris", time: 104 },
  { text: "Soñando nuestro gran amor", time: 108 },
  { text: "Pienso en ti", time: 144 },
  { text: "Tu voz es mi canción", time: 148 },
  { text: "Mi corazón late por ti", time: 153 },
  { text: "Cuando me miras", time: 158 },
  { text: "Como luces de magia", time: 164 },
  { text: "¿Dónde estás? Te quiero aquí", time: 169 },
  { text: "Tomando fuerte tus manos", time: 176 },
  { text: "Iluminas mi noche gris", time: 183 },
  { text: "Soñando nuestro gran", time: 188 },
  { text: "Amor.", time: 140 },
];


// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);