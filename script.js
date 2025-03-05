let secretNumber = Math.floor(Math.random() * 100) + 1;

let attempts = 0;

const userInput = document.getElementById('inputNumber');
const checkButton = document.getElementById('checkButton');
const message = document.getElementById('message');
const attemptsSpan = document.getElementById('attempts');
const restartButton = document.getElementById('restartButton');

checkButton.addEventListener("click", function () {
  let userGuess = Number(userInput.value)
  if (!userGuess || userGuess < 1 || userGuess > 100) {
    message.textContent = 'Введите число от 1 до 100!';
    return;
  }
  
  attempts++
  attemptsSpan.textContent = attempts;
  
  if (userGuess === secretNumber) {
    message.textContent = `Поздравляем! Вы угадали число ${secretNumber} за ${attempts} попыток!`;
    message.style.color = 'green';
    checkButton.disabled = true;
  } else if (userGuess > secretNumber) {
    message.textContent = 'Указанное число больше загаданного!';
    message.style.color = "red";
  } else {
    message.textContent = 'Вы указали число меньше загаданного';
    message.style.color = "red";
  }
});

restartButton.addEventListener('click', function () {
  secretNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  attemptsSpan.textContent = attempts;
  message.textContent = '';
  userInput.value = '';
  checkButton.disabled = false;
})

userInput.addEventListener("keypress", function (event) {
  if (event.key === 'Enter') {
    checkButton.click();
  }
})
