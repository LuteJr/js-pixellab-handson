// var i = 1;

// do {
//   console.log(i);

//   i++;
// } while (i < 100);

var i = 8;

do {
  if (i > 32 || i % 2 === 0) {
    i++;

    continue;
  }

  console.log(i);
  i++;
} while (i < 100);

console.warn(`Folosind metoda prompt de trei ori cere utilizatorului un numar, o limita inferioara si o limita superioara apoi
afiseaza toti multiplii de numar intre limita inferioara si limita superioara introduse.`);

var minLimit = prompt('Introdu valoarea minima:');
var maxLimit = prompt('Introdu valoarea maxima:');
var number = prompt('Introdu numarul divizibil:');
var i = minLimit;

do {
  if (minLimit > 32 || i % number !== 0) {
    i++;

    continue;
  }

  console.log(i);
  i++;
} while (i < maxLimit);
