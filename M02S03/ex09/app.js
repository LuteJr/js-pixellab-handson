const heading = document.getElementsByTagName('h1')[0];
const ul = document.querySelector('ul');

//functiile adaugate ca event listener
//vor primi event ca parametru
const onClick = (event) => {
  //destructurare
  const { curentTarget: heading } = event;

  //DOM traversal spre UL (hi + ul in css)
  const ul = heading.nextElementSibling;
  //prorietatea style.display
  //se refera la stilul INLINE
  //nu la ce avem in css
  if (ul.style.display === '') {
    ul.style.display = 'none';
  } else {
    ul.style.display = '';
  }
};

const onResize = () => {
  const width = window.innerWidth;

  if (width <= 500) {
    ul.style.display = 'none';
    heading.addEventListener('click', onClick);
  } else {
    ul.style.display = '';
    heading.removeEventListener('click', onClick);
  }
};

window.addEventListener('resize', onResize);
