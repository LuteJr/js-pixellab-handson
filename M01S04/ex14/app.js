var person = {
  firstName: 'Dragos',
  lastName: 'Iordache',
  birthYear: 1987,
  pets: [
    {
      name: 'Twix',
      species: 'papagal',
      age: 4,
    },
    {
      name: 'Mars',
      species: 'caine',
      age: 2,
    },
    {
      name: 'Bounty',
      species: 'hamster',
      age: 4,
    },
    {
      name: 'Lion',
      species: 'pisica',
      age: 10,
    },
  ],
};

console.warn(
  `Afiseaza in consola folosind metoda forEach() numele fiecarui animal. `,
);

person.pets.forEach(function (pet) {
  console.log(pet.name);
});

console.warn(`Folosind o bucla for afiseaza suma anilor animalelor. `);

var petsAgeSum = 0;
for (var i = 0; i < person.pets.length; i++) {
  petsAgeSum += person.pets[i].age;
}
console.log(petsAgeSum);

console.warn(`Folosind forEach() afiseaza cate una pe linie propozitiile:
“Twix este papagal si are 4 ani. Mars este caine si are… etc”.`);

person.pets.forEach(function (pet) {
  console.log(`${pet.name} este ${pet.species} si are ${pet.age} ani.`);
});

console.warn(`Folosind o bucla for afiseaza cate una pe linie propozitiile:
“Intre Dragos si Twix este o diferenta de xx ani. Intre Dragos si Mars… ” (repeta pentru toate intrarile din array).`);

var message = `Intre ${person.firstName} si`;
var currentYear = new Date().getFullYear();
var personAge = currentYear - person.birthYear;

person.pets.forEach(function (pet) {
  var ageDiff = personAge - pet.age;

  console.log(`${message} ${pet.name} este o diferenta de ${ageDiff} ani.`);
});

console.warn(`Folosind o bucla for afiseaza in ordine
inversa numele animalelor din array sub forma de propozitii:
“Animalul meu se numeste xxxx.”. `);

person.pets
  .slice()
  .reverse()
  .forEach(function (pet) {
    console.log(`Animalul meu se numeste ${pet.name}`);
  });

console.warn(`Folosind o bucla for afla care este cel mai in varsta animal si afiseaza propozitia:
  “xxx este cel mai batran animal pe care il am, dar intre noi este o diferenta de xx ani.” `);

var max = 0;
var length = person.pets.length;
for (var i = 0; i < length; i++) {
  if (person.pets[i].age > max) {
    max = person.pets[i].age;
    petName = person.pets[i].name;
  }
}
console.log(
  `${petName} este cel mai batran animal pe care il am, dar intre noi este o diferenta de ${
    personAge - max
  } ani.`,
);

console.warn(
  `Folosind o bucla forEach afiseaza propozitia: “Am papagal, caine, hamster si pisica.”.`,
);

var message = 'Am ';
person.pets.forEach(function (pet, index, keys) {
  var petSpecies = pet.species;
  var punctuation = ', ';

  if (index === keys.length - 1) {
    punctuation = '.';
  }

  if (index === keys.length - 2) {
    var punctuation = ' si ';
  }

  message += petSpecies + punctuation;
});

console.log(message);
