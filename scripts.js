var currentNumberWrapper = document.getElementById('currentNumber')
var currentNumber = 0

function increment() {
  if (currentNumber < 10) {
    currentNumber = currentNumber + 1
  } else {
    alert('número maximo atingido')
  }
  currentNumberWrapper.innerHTML = currentNumber
}

function decrement() {
  if (currentNumber > -10) {
    currentNumber = currentNumber - 1
  } else {
    alert('número maximo atingido')
  }
  currentNumberWrapper.innerHTML = currentNumber
}
