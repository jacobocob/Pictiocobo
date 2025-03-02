const words = {
    lugares: ["Playa", "Montaña", "Castillo", "Escuela", "Museo"],
    animales: ["Elefante", "Tiburón", "León", "Gato", "Mariposa"],
    comidas: ["Pizza", "Sushi", "Manzana", "Tarta", "Helado"],
    objetos: ["Teléfono", "Reloj", "Gafas", "Libro", "Lámpara"]
};

let timerInterval;
const countdownSound = document.getElementById("countdown-sound");

function getRandomWord() {
    const categories = Object.keys(words);
    const randomCategory = categories[Math.floor(Math.random() * categories.length)];
    const randomWord = words[randomCategory][Math.floor(Math.random() * words[randomCategory].length)];
    return randomWord;
}

function startGame() {
    // Reiniciar la palabra y el tiempo
    document.getElementById("word").textContent = getRandomWord();
    let timeLeft = 60;
    document.getElementById("timer").textContent = timeLeft;

    // Limpiar cualquier temporizador anterior
    clearInterval(timerInterval);

    // Iniciar la cuenta regresiva
    timerInterval = setInterval(() => {
        timeLeft--;
        document.getElementById("timer").textContent = timeLeft;

        // Reproducir sonido en los últimos 10 segundos
        if (timeLeft === 10) {
            countdownSound.play();
        }

        // Detener el temporizador al llegar a 0
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            alert("¡Tiempo agotado!");
        }
    }, 1000);
}

// Iniciar el juego al cargar la página
document.addEventListener("DOMContentLoaded", () => {
    startGame();
});
