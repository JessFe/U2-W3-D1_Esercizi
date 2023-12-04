/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("|--- Esercizio: 1 ---|");

function area(l1, l2) {
  const areaRettangolo = l1 * l2;
  return areaRettangolo;
}
console.log("Area rettangolo = ", area(2, 3));

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("|--- Esercizio: 2 ---|");

function crazySum(num1, num2) {
  if (num1 == num2) {
    return "Numeri uguali, somma * 3 = " + (num1 + num2) * 3;
  } else {
    return "Numeri diversi, somma = " + (num1 + num2);
  }
}
console.log(crazySum(4, 4));

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("|--- Esercizio: 3 ---|");

function crazyDiff(num) {
  const differenzaAssoluta = Math.abs(num - 19);

  if (num > 19) {
    return ">19: differenza assoluta * 3 = " + differenzaAssoluta * 3;
  } else {
    return ">=Maggiore 19: differenza assoluta = " + differenzaAssoluta;
  }
}

console.log(crazyDiff(21));

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("|--- Esercizio: 4 ---|");

function boundary(n) {
  return (n >= 20 && n <= 100) || n == 400;
}

console.log("Compreso tra 20 e 100 oppure uguale a 400? ", boundary(400));

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("|--- Esercizio: 5 ---|");

function epify(stringa) {
  const lowercaseInput = stringa.toLowerCase();

  if (lowercaseInput.startsWith("epicode")) {
    return stringa;
  } else {
    return "EPICODE " + stringa;
  }
}

console.log(epify("Non comincia con EPICODE"));
console.log(epify("EPICODE è all'inizio della stringa"));

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("|--- Esercizio: 6 ---|");

function check3and7(numPos) {
  if (numPos % 3 === 0 || numPos % 7 === 0) {
    return "E' un multiplo di 3 o di 7";
  } else {
    return "NON è un multiplo di 3 o di 7";
  }
}

console.log(check3and7(5));

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("|--- Esercizio: 7 ---|");

function reverseString(stringaInv) {
  return stringaInv.split("").reverse().join("");
  // split divide la stringa in un array di caratteri, reverse inverte l'ordine, join combina i caratteri in una nuova stringa
}

console.log("Stringa invertita: " + reverseString("EPICODE"));

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("|--- Esercizio: 8 ---|");

function upperFirst(stringa) {
  const parole = stringa.split(" "); // array di parole, divisione basata su spazi bianchi

  const paroleTrasf = parole.map(function (word) {
    // map trasformo ogni parola
    return word.charAt(0).toUpperCase() + word.slice(1); // prima lettera maiuscola
  });

  const stringaFinale = paroleTrasf.join(" "); // unisco le parole in una nuova stringa

  return stringaFinale;
}

console.log("Ogni parola inizia con una maiuscola: " + upperFirst("ciao come va?"));

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("|--- Esercizio: 9 ---|");

function cutString(stringa) {
  if (stringa.length < 2) {
    return "La stringa è troppo corta!";
  }
  return stringa.slice(1, -1);
}

console.log("Stringa senza il primo e l'ultimo carattere: " + cutString("CIAO! Come va?"));
console.log("Stringa senza il primo e l'ultimo carattere: " + cutString("a"));

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("|--- Esercizio: 10 ---|");

function giveMeRandom(n) {
  const numeriCasuali = [];

  for (let i = 0; i < n; i++) {
    const numeroCasuale = Math.floor(Math.random() * 11); // numero casuale tra 0 (incluso) e 11 (escluso)
    numeriCasuali.push(numeroCasuale);
  }
  return numeriCasuali;
}

console.log("Array di numeri random: ", giveMeRandom(20));
