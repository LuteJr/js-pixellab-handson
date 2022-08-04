// var i = 0;

// while (i <= 100) {
//   console.log(i);

//   i++;
// }

// Folosind keywordul break opreste bucla atunci cand numarul este egal cu 50 (dar afiseaza-l).
var i = 1;
while (i < 100) {
  if (i > 12) {
    i++;

    break;
  }
  console.log(i);

  i++;
}

console.warn(
  `Folosind keywordul continue afiseaza doar numerele pare intre 1 si 32 (inclusiv). `,
);

var i = 1;
while (i < 100) {
  if (i >= 32 || i % 2 !== 0) {
    i++;

    continue;
  }
  console.log(i);

  i++;
}

console.warn(`Folosind metoda prompt de doua ori cere utilizatorului un numar si o limita superioara apoi afiseaza
toti multiplii de numar intre 5 si limita superioara introduse.`);

var number = prompt('Introdu numarul multiplu:');
var limit = prompt('Introdu numarul maxim:');
var i = 5;
while (i <= limit) {
  if (i > limit || i % number !== 0) {
    i++;

    continue;
  }
  console.log(i);

  i++;
}
