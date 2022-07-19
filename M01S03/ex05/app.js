var person = {
  name: 'Ovidu',
  surname: 'Giurgiuveanu',
  age: 32,
  petOwner: false,
  skills: ['html', 'javascript', 'css'],

  friends: [
    {
      name: 'Larry',
      surname: 'Larryson',
      age: 30,
    },
    {
      name: 'Steven',
      surname: 'Stevenson',
      age: 31,
    },
    {
      name: 'Carol',
      surname: 'Carolson',
      age: 29,
    },
  ],
};

console.log(person.friends);

console.log(
  'Ma numesc ' +
    person.name +
    ' ' +
    person.surname +
    ' si stiu ' +
    person.skills[0] +
    ' si ' +
    person.skills[2] +
    '.',
);

console.log(
  'Ma numesc ' +
    person.name +
    ' ' +
    ' si acum invatat ' +
    person.skills[1] +
    '.',
);

console.log(
  'Am' +
    ' ' +
    person.friends.length +
    ' ' +
    'prieteni:' +
    ' ' +
    person.friends[0].surname +
    ',' +
    ' ' +
    person.friends[1].surname +
    ' ' +
    'si' +
    ' ' +
    person.friends[2].surname +
    '.',
);

console.log(
  'Ma numesc ' +
    person.name +
    ' ' +
    person.surname +
    ' si vreau sa invatat ' +
    person.skills[1] +
    '.',
);

console.log(
  'Numele meu este' +
    ' ' +
    person.name +
    person.surname +
    ',' +
    ' ' +
    'am' +
    ' ' +
    person.age +
    ' ' +
    'si' +
    ' ' +
    person.friends.length +
    ' ' +
    'prienteni.',
);
