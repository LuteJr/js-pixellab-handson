function calculateSurface(width, length) {
  if (arguments.length === 2) {
    return width * length;
  } else {
    return width ** 2;
  }
}

console.warn(`Creeaza un wrapper numit calculateSquareSurface()
pentru calculateSurface() care sa
primeasca un singur parametru si sa calculeze
suprafata unui patrat.`);

function calculateSquareSurface(width) {
  return calculateSurface(width);
}

console.warn(`Creeaza un wrapper numit
calculateRectangleSurface() pentru calculateSurface()
care sa primeasca doi parametrii si sa calculeze
suprafata unui dreptunghi. `);

console.log(calculateSquareSurface(4));
