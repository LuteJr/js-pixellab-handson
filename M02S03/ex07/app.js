//className
//metoda mai veche care ne da un arraylike object

const button = document.getElementsByClassName('btn')[0];
const onClick = () => {
  alert('Butonul a fost apasat');
};

const onResize = () => {
  const width = window.innerWidth;

  if (width <= 650) {
    button.removeEventListener('click', onClick);
  } else {
    button.addEventListener('click', onClick);
  }
};

onResize();

//inregistram eventhandlerul pe click:
button.addEventListener('resize', onResize);
