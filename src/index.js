const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    // write your solution here
    return expr.split('**********').map(decoderMatchTenSymbols=>decoderMatchTenSymbols.match(/.{10}/g).map(decoderMatchTwoSymbols => decoderMatchTwoSymbols.match(/.{2}/g).map(decodingVal=>{return +decodingVal===11?(()=>{return '-';})():+decodingVal===10?(()=>{return '.';})():(()=>{return '';})();}).join("")).map(morseEqual => MORSE_TABLE[morseEqual]).join("")).join(" ")
}

module.exports = {
    decode
}