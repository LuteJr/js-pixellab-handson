function calculateSurface(width, length, height) {
  switch (arguments.length) {
    case 1:
      return width * width;
      break;
    case 2:
      return width * length;
      break;
    case 3:
      return 2 * (width * length + width * height + length * height);
      break;
  }
}

console.log(calculateSurface(2));
console.log(calculateSurface(6, 7));
console.log(calculateSurface(20, 15, 5));

console.warn(`Creeaza o functie numita calculateCircleArea()
si afiseaza suprafata unor cercuri cu raza de 2, 20 si 16. `);

function calculateCircleArea(radius) {
  return Math.PI * radius ** 2;
}

console.log(calculateCircleArea(2));
console.log(calculateCircleArea(20));
console.log(calculateCircleArea(16));

console.warn(`Creeaza un obiect numit pet cu urmatoarele metode: getName, getSpecies si getAge.
Folosind metodele obiectului pet afiseaza propozitia: “nnnn este ssss si are aaaa ani.”
Folosind metoda getAge calculeaza si salveaza intr-o variabila numita petAge varsta animalului si afiseaza propozitia:
“Animalul meu are petAge ani”
`);

let pet = {
  getName: function () {
    return 'Max';
  },
  getSpecies: function () {
    return 'dog';
  },
  getAge: function () {
    return 3;
  },
};

console.log(
  `${pet.getName()} este ${pet.getSpecies()} si are ${pet.getAge()} ani.`,
);

let petAge = pet.getAge();

console.log(`Animalul meu are ${petAge} ani.`);
