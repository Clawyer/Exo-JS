// FONCTION LAIR DUN CERCLE AVEC R EN PARAMETRE

// ECRIRE SI LE 1ER JANVIER EST UN DIMANCHE ENTRE 2014 ET 2050

// TROUVER LES N PREMIERS TERMES DE FIBONACCI

// BRUTEFORCE CODE DE CAESAR

const air = (r) => 2 * Math.PI * r;


const firstJanvierIsDimanche = () => {
  for (let year = 2014; year <= 2050; year++) {
    let d = new Date(year, 0, 1);
    if (d.getDay() === 0) console.log(year);
  }
};

const fibonacci = (i, array) => {
  let n = array.length;
  let k = array[n - 1];
  let v = array[n - 2];
  array.push(k + v);

  return i == 0 ? array : fibonacci(i - 1, array);
};

const stringToCode = (string) => {
  let array = [];
  for (let i = 0; i < string.length; i++) {
    array.push(string.charCodeAt(i));
  }
  return array;
};

const decode = (message) => {
  let result = {};
  let str = message.toLowerCase();
  let words = str.split(" ");

  for (let j = 1; j < 26; j++) {
    let sentence = [];
    words.forEach(function (word) {
      let charArr = stringToCode(word);
      let string_word = "";
      charArr.forEach((char) => {
        let k = char + j;
        if (k > 122) k -= 123 - 97;
        string_word += String.fromCharCode(k);
      });
      sentence.push(string_word);
    });
    result[j] = sentence;
  }
  return result;
}



export { air, firstJanvierIsDimanche, fibonacci, decode };
