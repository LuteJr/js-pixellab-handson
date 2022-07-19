var object = {
  name: 'Dragos',
  surname: 'Iordache',
  age: 32,
  petOwner: false,
  carOwner: true,
};

console.warn(
  'Afiseaza fraza “Ma numesc xxx yyy si am xx ani.” in consola folosind operatorul de concatenare',
);

console.log(
  'Ma numesc ' +
    object.name +
    ' ' +
    object.surname +
    ' si am ' +
    object.age +
    ' ani.',
);

console.log(object.name);
console.log(object.age.toString());

console.log((2019 - object.age).toString());

console.log((2022 - object.age).toString());

console.warn(
  'Afiseaza fraza “xxx yyy are xx ani.” in consola folosind operatorul de concatenare',
);

console.log(
  object.name + ' ' + object.surname + ' are ' + object.age + ' ani.',
);

console.warn(
  'Afiseaza fraza “xxx s-a nascut in aaaa.” Foloseste tot anul curent pentru a scadea varsta.',
);

console.log(
  object.name + ' ' + 's-a nascut in' + ' ' + (2022 - object.age) + '.',
);
