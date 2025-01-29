const texts = ['Daly sunshine is a pert of our lives.',
    'It plays a very good role.',
    'Useful for every being in the world.',

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


currentText = texts[Math.floor(Math.random) * texts.length];
textDisplay.textContent = currentText;


textInput.focus();
startTime = new Date().getTime();

textInput.addEventListener('input', checkTyping)

}

function checkTyping(){
const typedText = textInput.value;

if (currentText.startsWith(typedText)){

    textInput.style.borderColor = 'green';
}
else {
    textInput.style.borderColor = 'red';

}



if (typedText === currentText){
    endTime = new Date.getTime();
    calsulateResults();
}

}

function calsulateResults(){
textInput.disabled = true;
const timeTaken = (endTime - startTime) / 1000;

const wordCount = currentText.split('').length;
const wpm = Math.round((wordCount / timeTaken)*60);

stats.innerHTML = `
<p> Time Take: ${timeTaken.toFixed(2)} seconds</p>
<p>Word count minute ${wpm} WPM</p>
`

}

startBtn.addEventListener('click', startText);