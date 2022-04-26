// FONCTION LAIR DUN CERCLE AVEC R EN PARAMETRE

// ECRIRE SI LE 1ER JANVIER EST UN DIMANCHE ENTRE 2014 ET 2050

// TROUVER LES N PREMIERS TERMES DE FIBONACCI

// BRUTEFORCE CODE DE CAESAR

const air = (r) => 2 * Math.PI * r;

const firstJanvierIsDimanche = () => {
  for (let year = 2014; year <= 2050; year++) {
    let d = new Date(year, 0, 1); // 1er JANVIER de chaque annee
    if (d.getDay() === 0) console.log(year); // SI ce jour est un dimanche on l'affiche
  }
};

const fibonacci = (i, array) => {
  let n = array.length;
  let k = array[n - 1];
  let v = array[n - 2];
  array.push(k + v); // Addition des deux derniers éléments de mon tableau et ajout au tableau

  return i == 0 ? array : fibonacci(i - 1, array); // si terminer on affiche le tableau sinon on continue
};

const fibonacci_imp = (i) => {
  let fibo = [0, 1];
  for (let j = 0; j < i; j++) {
    let n = fibo.length;
    let k = fibo[n - 1];
    let v = fibo[n - 2];
    fibo.push(k + v);
  }
  return fibo;
};

const stringToCode = (string) => {
  // fonction auxiliaire qui converti un string en un tableau de code ascii correspondant à chacunes des lettres
  let array = [];
  for (let i = 0; i < string.length; i++) {
    array.push(string.charCodeAt(i));
  }
  return array;
};

const decode_caesar = (message) => {
  let result = {}; // resultat final contenant toutes les possibilités
  let str = message.toLowerCase(); // on se concentre sur les codes ascii minuscules
  let words = str.split(" "); // Split la phrase en array de mot

  for (let j = 1; j < 26; j++) {
    // Les 25 possibilités de décalement
    let sentence = []; // Phrase finale
    words.forEach(function (word) {
      let charArr = stringToCode(word); // mot sous forme de tableau de lettre en code ascii
      let string_word = "";
      charArr.forEach((char) => {
        let k = char + j;
        if (k > 122) k -= 123 - 97; // si le decalement dépasse le code 122 (z minuscule) on revient au code ascii a (97)
        string_word += String.fromCharCode(k); // converti les code ascii avec les lettres correspondantes
      });
      sentence.push(string_word);
    });
    result[j] = sentence; // Ajout au set
  }
  return result;
};

export { air, firstJanvierIsDimanche, fibonacci, decode_caesar };
