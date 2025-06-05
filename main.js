const container = document.getElementById('array-container');
const startBtn = document.getElementById('start');
const algorithmSelect = document.getElementById('algorithm');

let array = [];

function generateArray(size = 30) {
  array = [];
  container.innerHTML = '';
  for (let i = 0; i < size; i++) {
    const value = Math.floor(Math.random() * 300) + 20;
    array.push(value);

    const bar = document.createElement('div');
    bar.classList.add('bar');
    bar.style.height = `${value}px`;
    container.appendChild(bar);
  }
}

startBtn.addEventListener('click', () => {
  const algo = algorithmSelect.value;
  if (algo === 'bubble') {
    bubbleSort(); // To be implemented
  } else if (algo === 'insertion') {
    insertionSort(); // To be implemented
  } else if (algo === 'merge') {
    mergeSort(); // To be implemented
  }
});

window.onload = generateArray;
