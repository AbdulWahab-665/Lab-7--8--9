const display = document.getElementById('display');

function appendValue(val) {
  display.value += val;
}

function clearDisplay() {
  display.value = '';       
  result.textContent = '';  
}

function calculate() {
  try {
    const answer = eval(display.value);
    result.textContent = answer; 
  } catch (e) {
    result.textContent = 'Error';
  }
}