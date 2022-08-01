var person = {
  firstName: 'John',
  lastName: 'Wick',
  email: 'x@x.com',
  birthYear: 1980,
  pets: [
    { name: 'Max', species: 'dog', age: 6 },
    { name: 'Nax', species: 'fish', age: 2 },
    { name: 'Pax', species: 'cat', age: 3 },
  ],
  zipCode: '042124',
};

console.log(
  `${person.firstName} este instructor de programare. ${person.firstName} studiaza JavaScript de la 17 ani.
    Cand ${person.firstName} a absolvit facultatea si-a facut licenta in JavaScript.
    ${person.firstName} are si un master in tehnologii internet.
    ${person.firstName} este instructor Pixellab si preda JavaScript acolo.`,
);

console.warn(
  '“Numele meu este: xxx yyy si am x animale.”. Nu uita de proprietatea length a arrayului pets. ',
);

console.log(
  'Numele meu este: ' +
    person.firstName +
    ' ' +
    person.lastName +
    ' si am ' +
    person.pets.length +
    ' animale.',
);

console.warn('Afiseaza propozitia: “Am acelasi email din copilarie: xxx.”.');

console.log('Am acelasi email din copilarie: ' + person.email + '.');

console.warn(
  'Afiseaza propozitia: “Unul din cele x animale ale mele este species si are age ani.”',
);

console.log(
  'Unul din cele ' +
    person.pets.length +
    ' animale ale mele este ' +
    person.pets[1].species +
    ' si are ' +
    person.pets[1].age +
    ' ani.',
);

console.warn(
  'Calculeaza si afiseaza (folosind anul curent) anul de nastere al animalului de pe pozitia 2. ',
);

var curentYear = 2022;
console.log((curentYear - person.pets[2].age).toString());

console.warn(`Calculeaza si salveaza in variabila difference diferenta de ani dintre persoana si animalul
de pe pozitia 0 si afiseaza aceasta diferenta. Foloseste anul curent. `);

var differece = curentYear - person.birthYear - person.pets[0].age;

console.log(differece.toString());

console.warn(
  `Salveaza numele animalului de pe pozitia 0 intr-o variabila numita petName. `,
);

var petName = person.pets[0].name;
console.log(petName);

console.warn(
  `Afiseaza propozitia: “Intre firstName si petName este o diferenta de difference ani.”.`,
);

console.log(
  'Intre ' +
    person.firstName +
    ' si ' +
    petName +
    ' este o diferenta de ' +
    differece +
    ' ani.',
);
