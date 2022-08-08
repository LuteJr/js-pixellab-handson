console.warn(`Folosind codul de la exercitiul 08,
numeste functia care ruleaza la click clickHandler si
foloseste-i numele ca parametru al metodei addEventListener
in locul celei anonime.
Adauga un buton pe care scrie Elimina Evenimentul.
La click pe acest buton nou, foloseste metoda removeEventListener
al variabilei
button si foloseste numele clickHandler ca parametru.`);

const button = document.getElementById('clicker');
const removeButton = document.getElementById('remove');
const age = document.getElementById('age');
// const message = document.getElementById('message');

button.addEventListener('click', clickHandler);
removeButton.addEventListener('click', function () {
  button.removeEventListener('click', clickHandler);
});
age.addEventListener('click', ageExtractor, ageExtractorText);

//hoisting
function clickHandler() {
  alert('Ai apasat butonul!');
}

function ageExtractor() {
  let agePrint = prompt(`Ce varsta ai?`);

  return console.log(`Ai ${agePrint} ani.`);
}

function ageExtractorText() {
  let agePrint = prompt(`Ce varsta ai?`);

  return `Ai ${agePrint} ani.`;
}

document.getElementById('message').innerHTML = ageExtractorText();
