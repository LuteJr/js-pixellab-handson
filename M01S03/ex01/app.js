var object = {
  name: 'Dragos',
  surname: 'Iordache',
  age: 32,
  petOWner: false,
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

console.warn();

console.log((2019 - object.age).toString());

console.warn(
  'Afiseaza fraza “xxx yyy are xx ani.” in consola folosind operatorul de concatenare',
);

console.log(
  object.name + ' ' + object.surname + ' are ' + object.age + ' ani.',
);
