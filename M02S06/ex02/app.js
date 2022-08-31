// in arrayul process.argv vom gasi parametrii cu care a fost
//invocat de node linia de comanda

const arguments = process.argv;
//destructuram acest array astfel incat sa avem doar parametrii
//oldschool ar fi:
//const test = arguments.slice(2)
//in destructurarea moderna daca nu avem nevoie de primi indexi din
//array pune virgula
const [node, fileName, ...restOfArguments] = arguments;

//primul argument din paramentru de comanda
//este acum pe pozitia [0]
const side = restOfArguments[0];

console.log(`Suprafara patratului este ${side ** 2}`);
