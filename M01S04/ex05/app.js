var number = prompt('Introdu un numar:');
var superiorNumber = prompt('Introdu limita superioara:');

for (var i = 0; i <= superiorNumber; i++) {
  console.log(i);

  if (i % number !== 0) {
    continue;
  }
  console.log(`Acest numar este multiplu de ${number}`);
}
