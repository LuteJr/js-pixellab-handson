var globalVariable = 'Ma aflu in contextul global';

if (true) {
  var localVariable = 'Ma aflu in contextul local';
  var globalVariable = 'Nu ma aflu in textul global';

  console.log(globalVariable);
  console.log(localVariable);
}

console.log(globalVariable);
console.log(localVariable);
