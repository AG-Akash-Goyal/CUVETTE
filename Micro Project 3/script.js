let display = document.querySelector('.Disp'); 
display.value = '';

function Displays(value) {

  if (['+', '-', '/', 'x'].includes(value)) {
    display.value += ` ${value} `;
  } else {

    if (display.value === '') {
      display.value = value;
    } else {
      display.value += value;
    }
  }
}

function dee() {
  display.value = display.value.trim();
  display.value = display.value.slice(0, -1).trim(); 
  if (display.value === '') {
    display.value = '';
  }
}

function Reset() {
  display.value = '';
}

function Output() {
    let expression = display.value.replace(/x/g, '*');
    
    try {
      let result = eval(expression);
      
      if (typeof result === 'number' && !Number.isInteger(result)) {
        result = result.toFixed(3);
      }
  
      display.value = result;
    } catch (error) {
      display.value = 'Error';
    }
  }