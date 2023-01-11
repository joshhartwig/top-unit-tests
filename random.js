class Random {
  
  // capitalize a string
  capitalize = function(str){
    const firstLetter = str[0].toUpperCase();
    const rest = str.slice(1,str.length);
    return firstLetter + rest;
  }

  // reverse string
  reverseString = (str) => {
    return str.split('').reverse().join('');
  }

  // return each char shifted by one
  caesarCipher = (str) => {
      let last = str[str.length -1];
      let shifted = [];
      shifted.push(last);
      for(let i = 0; i < str.length - 1; i++) {
        shifted.push(str[i]);
      }
      return shifted.join('');
  }

  // return obj with avg, min, max, length
  analyzeArray = (arr) => {
    let obj = {
      avg: 0,
      min: 0,
      max: 0,
      length: 0,
    };

    let initialVal = 0;
    obj.avg = arr.reduce((a,c) => a + c, initialVal) / arr.length;
    obj.min = Math.min(...arr);
    obj.max = Math.max(...arr);
    obj.length = arr.length
    return obj;
  }
}

class Calculator {
  add = (x,y) => x + y;
  subtract = (x,y) => x - y;
  divide = (x,y) => x / y;
  multiply = (x,y) => x * y;
}


// return object with avg, min, max and length
const analyzeArray = function(arr){

}

module.exports = Random, Calculator