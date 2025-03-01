const words = ["Perro", "Gato", "Montaña", "Pizza", "Bicicleta", "León", "Avión", "Cactus"];
const timerDisplay = document.getElementById("timer");
const wordDisplay = document.getElementById("word");
const startButton = document.getElementById("start-button");
const countdownSound = document.getElementById("countdown-sound");

let countdown;
let timeLeft = 60;

function startGame() {
    // Escoge una palabra al azar
    wordDisplay.textContent = words[Math.floor(Math.random() * words.length)];
    
    // Reinicia el temporizador
    clearInterval(countdown);
    timeLeft = 60;
    timerDisplay.textContent = timeLeft;
    
    countdown = setInterval(() => {
        timeLeft--;
        timerDisplay.textContent = timeLeft;

        // Reproduce sonido en los últimos 10 segundos
        if (timeLeft === 10) {
            countdownSound.play();
        }

        if (timeLeft <= 0) {
            clearInterval(countdown);
            timerDisplay.textContent = "¡Tiempo terminado!";
        }
    }, 1000);
}

// Agregar evento al botón
startButton.addEventListener("click", startGame);
