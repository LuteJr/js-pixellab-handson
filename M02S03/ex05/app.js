//salvam valoarea initiala de latime a ferestrei
let oldWidth = window.innerWidth;

const showMessage = (message, htmlId) => {
  let p = document.getElementById(htmlId);

  if (p === null) {
    p = document.createElement('p');
    p.id = htmlId;

    document.body.append(p);
  }

  p.innerText = message;
};

const showWindowSurface = () => {
  showMessage(
    `Fereastra are acum suprafata de ${
      window.innerHeight * window.innerWidth
    } pixeli.`,
    'surfaceP',
  );
};

const debouncedWindowSurface = debounce(showWindowSurface, 300);
window.addEventListener('resize', debouncedWindowSurface);
showWindowSurface();

//window face parte din BOM
//browser object model
//nu intra sub incidenta DOMContentLoader

window.addEventListener('resize', () => {
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;
  console.log('Fereastra si-a schimbat dimensiunea');

  showMessage(window.innerWidth, 'widthP');

  //operator ternar
  const message =
    window.Width !== oldWidth ? 'Fereastra si-a schimbat latimea' : '';
  oldWidth = windowWidth;
  showMessage(message, 'secondP');

  showMessage(
    `Fereastra are acum suprafata de ${windowHeight * windowWidth}pixeli.`,
  );
});
