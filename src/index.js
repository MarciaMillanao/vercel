import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`
const text = document.getElementsByName('user-input');

const wordCount = document.querySelector('[data-testid=word-count]');
const characterCount = document.querySelector('[data-testid=character-count]');
const countExcludingSpaces = document.querySelector('[data-testid=character-no-spaces-count]');
const averageWordLength = document.querySelector('[data-testid=word-length-average]');
const countNumberResult = document.querySelector('[data-testid=number-count]');
const numberSumResult = document.querySelector('[data-testid=number-sum]') 
text[0].addEventListener('input', () => {
  const word = analyzer.getWordCount(text[0].value);
  // console.log(text[0].value.split(' '))
  wordCount.textContent= "Cantidad de palabras " + word
  const largo = analyzer.getCharacterCount(text[0].value);
  characterCount.textContent= "Cantidad de caracteres: " + largo;
  const characterCountExcludingSpaces = analyzer.getCharacterCountExcludingSpaces(text[0].value);
  // console.log(characterCountExcludingSpaces)
  countExcludingSpaces.textContent= "Caracteres sin espacios: " + characterCountExcludingSpaces;
  const wordLength = analyzer.getAverageWordLength(text[0].value);
  // console.log(wordLength);
  averageWordLength.textContent = "Promedio Largo Palabras: " + wordLength;
  const numberCount = analyzer.getNumberCount(text[0].value);
  // console.log(numberCount);
  countNumberResult.textContent = "Cantidad de números: " + numberCount;
  const numberSum = analyzer.getNumberSum(text[0].value);
  // console.log(numberSum)
  numberSumResult.textContent = " Suma de números: " + numberSum
})

const btnReset = document.getElementById('reset-button');
btnReset.addEventListener('click', () => {
  console.log('hola')
})