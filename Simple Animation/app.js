document.addEventListener('mousemove', function (e) {
  const washer = document.querySelector('.washer');

  washer.style.left = e.offsetX + 'px';
  washer.style.top = e.offsetY + 'px';
});
