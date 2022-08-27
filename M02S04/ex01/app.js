const box = document.querySelector('.box');
const applyButton = document.querySelector('.apply');
const darkenButton = document.querySelector('.darken');
const className = 'animate-class';

setTimeout(() => {
  box.classList.add('className');

  //callback hell
  setTimeout(() => {
    box.classList.remove('className');
  }, 2000);
}, 2000);

applyButton.addEventListener('click', (event) => {
  //remove style atribute first:
  box.style.backgroundColor = '';

  box.classList.toggle(className);

  const hasClass = box.classList.contains(className);
  //fiind in arrow function, nu this este elementul
  //ci event.currentTarget, pentru ca pe el am adaugat
  //event handler

  const button = event.currentTarget;

  //ternary operator
  const buttonText = hasClass ? 'Elimina' : 'Aplica';
  button.title = buttonText;
  button.innerText = buttonText;
});

darkenButton.addEventListener('click', () => {
  //diferenta din tre setAtribute style
  //si manipularea individoala a proprietatilor de pe style
  //este ca style suprascrie complet

  box.setAttribute('style', 'background-color: #000');
});
