function getTime() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const miliseconds = date.getMilliseconds();

  return `${hours}:${minutes}:${seconds}:${miliseconds}, am ajuns la pixeltab.`;
}

setInterval(function () {
  console.log(getTime());
}, 1000);
