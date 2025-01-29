const texts = ['Daly sunshine is a pert of our lives.',
    'It plays a very good role.',
    'Useful for every being in the world.'

]


const textInput = document.getElementById('textInput');
const textDisplay = document.getElementById('textDisplay');
const startBtn = document.getElementById('startBtn');
const stats = document.getElementById('stats');


let startTime, endTime;
let currentText = '';

function startText(){
textInput.value = '';
stats.textContent = '';
textInput.disabled = false;


currentText = texts[Math.floor(Math.random)*texts.length];
textDisplay.textContent = currentText;


textInput.focus();
startTime = new Date().getTime();

textInput.addEventListener('input', checkTyping)

}