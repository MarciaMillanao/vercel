const analyzer = {  
  getWordCount: (text) => {
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
    const word = text.split(' ').length;
    console.log(word)
    return word
  },
  getCharacterCount: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
    return text.length;
  },
  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
    // const puntuacion = !"#$%&'()*+,\-./:;<=>?@[]^_`{|}
    const puntuacion =['.', ',', ';', ':', '"', '¿', '?', '¡', '!', '-', '«', '»', '[', ']', '{', '}', '(', ')'];
    let count = 0;
    if(text.length === 0){
      return count
    }
    for(let i= 0; i < text.length; i++){
      if(text[i] !== ' '){
        if(!puntuacion.includes(text[i])){
          count ++
        }
      }
    }
    return count
  },
  getAverageWordLength: (text) => {    
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
    let lengthTotal = 0;
    const wordLength = text.split(' ');
    for(let i = 0; i < wordLength.length; i++){
      if(wordLength[i].length !== 0){
        lengthTotal += wordLength[i].length
      }
    }
    const average = lengthTotal / wordLength.length
    return Math.round(average * 100) / 100;
  },
  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    let countNumber = 0;
    const numberCount = text.split(' ');
    for(let i = 0; i < numberCount.length; i++){
      if(numberCount[i] !== ''){
        const number = Number(numberCount[i]);
        if(!isNaN(number)){
          countNumber ++
        }
      }
    }
    return countNumber
  },
  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
    let sum = 0;
    const numberCount = text.split(' ');
    
    for(let i = 0; i < numberCount.length; i++){
      if(numberCount[i] !== ''){
        const number = Number(numberCount[i]);
        if(!isNaN(number)){
          sum += number    
          console.log('suma ', sum)    
        }
      }
    }
    console.log(Math.round(sum * 100) / 100)
    return Math.round(sum * 100) / 100;
  },
};

export default analyzer;
