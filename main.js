const resultSp = document.getElementById('result');
const lengthSp = document.getElementById('length');
const generateEl = document.getElementById('generate');
const clipboard = document.getElementById('copy');
const symbolSp = document.getElementById('symbols');
const numSp = document.getElementById('nums');
const smolSp = document.getElementById('smol');
const biggSp = document.getElementById('bigg');

generate.addEventListener('click', () => {
    var Passlength = +lengthSp.value;
    //resultSp.innerText = generator(Passlength).slice(0, lengthofpass);
    if (symbolSp.checked == true || numSp.checked == true || smolSp.checked == true || biggSp.checked == true) {
        resultSp.innerText = generator(Passlength).slice(0, Passlength);
    } else {
        resultSp.innerText = 'Check atleast one checkbox';
    }
});

clipboard.addEventListener('click', () => {
    const textarea = document.createElement('textarea');
    const password = resultSp.innerText;

    if (!password) { return; }

    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
    alert('Password copied to clipboard.');
});

const numbers = '1234567890';
const symbols = '!@#$%^&*()';
const capLetterString = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const smolLettersString = 'abcdefghijklmnopqrstuvwxyz';

function rando(string) {
    return string.charAt(Math.floor(Math.random() * string.length));
};

function oneZero(optCheck, func){
    if (optCheck == true){
        return func
    } else {
        return ""
    }
}

function generator(lengthofpass) {
    var genratedPass = '';

    for (var i = 0; i <= lengthofpass; i++) {
        genratedPass += oneZero(symbolSp.checked, rando(symbols)) + oneZero(numSp.checked, rando(numbers)) + oneZero(smolSp.checked, rando(smolLettersString)) + oneZero(biggSp.checked, rando(capLetterString))
    };

    var finalPass = genratedPass;

    return finalPass;
}