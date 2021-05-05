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

function generator(lengthofpass) {
    var genratedPass = '';

    for (var i = 0; i <= lengthofpass; i++) {
        //genratedPass += rando(numbers) + rando(symbols) + rando(capLetterString) + rando(smolLettersString);
        if (symbolSp.checked == true && numSp.checked == true && smolSp.checked == true && biggSp.checked == true) {
            genratedPass += rando(numbers) + rando(symbols) + rando(capLetterString) + rando(smolLettersString);
        } else if (symbolSp.checked == true && numSp.checked == true && smolSp.checked == true && biggSp.checked == false) {
            genratedPass += rando(numbers) + rando(symbols) + rando(smolLettersString);
        } else if (symbolSp.checked == true && numSp.checked == true && smolSp.checked == false && biggSp.checked == false) {
            genratedPass += rando(numbers) + rando(symbols);
        } else if (symbolSp.checked == true && numSp.checked == false && smolSp.checked == false && biggSp.checked == false) {
            genratedPass += rando(symbols);
        } else if (symbolSp.checked == false && numSp.checked == true && smolSp.checked == true && biggSp.checked == true) {
            genratedPass += rando(numbers) + rando(smolLettersString) + rando(capLetterString);
        } else if (symbolSp.checked == false && numSp.checked == false && smolSp.checked == true && biggSp.checked == true) {
            genratedPass += rando(smolLettersString) + rando(capLetterString);
        } else if (symbolSp.checked == false && numSp.checked == false && smolSp.checked == false && biggSp.checked == true) {
            genratedPass += rando(capLetterString);
        } else if (symbolSp.checked == true && numSp.checked == false && smolSp.checked == false && biggSp.checked == true) {
            genratedPass += rando(symbols) + rando(capLetterString);
        } else if (symbolSp.checked == false && numSp.checked == true && smolSp.checked == true && biggSp.checked == false) {
            genratedPass += rando(numbers) + rando(smolLettersString);
        } else if (symbolSp.checked == true && numSp.checked == false && smolSp.checked == true && biggSp.checked == false) {
            genratedPass += rando(symbols) + rando(smolLettersString);
        } else if (symbolSp.checked == false && numSp.checked == true && smolSp.checked == false && biggSp.checked == true) {
            genratedPass += rando(numbers) + rando(capLetterString);
        } else if (symbolSp.checked == false && numSp.checked == true && smolSp.checked == false && biggSp.checked == false) {
            genratedPass += rando(numbers);
        } else if (symbolSp.checked == false && numSp.checked == false && smolSp.checked == true && biggSp.checked == false) {
            genratedPass += rando(smolLettersString);
        } else if (symbolSp.checked == true && numSp.checked == false && smolSp.checked == true && biggSp.checked == true) {
            genratedPass += rando(symbols) + rando(capLetterString) + rando(smolLettersString);
        } else if (symbolSp.checked == true && numSp.checked == true && smolSp.checked == false && biggSp.checked == true) {
            genratedPass += rando(numbers) + rando(symbols) + rando(capLetterString);
        }
    };

    var finalPass = genratedPass;

    return finalPass;
}