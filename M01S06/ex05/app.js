(function () {
  document.addEventListener('DOMContentLoaded', function () {
    const showButton = document.querySelector('#showButton');
    const toggleButton = document.querySelector('#toggleEventButton');
    const removeEventsButton = document.getElementById('removeEvents');
    let eventBound = true;

    showMessage('Alerta va fi afisata');

    function showAlert() {
      alert(`Butonul a fost apasat`);
    }

    showButton.addEventListener('click', showAlert);

    toggleButton.addEventListener('click', function () {
      this;
      if (eventBound === true) {
        showButton.removeEventListener('click', showAlert);
        this.innerText = 'Porneste afisarea';
        showMessage('Alerta NU va fi afisata');

        eventBound = false;
      } else {
        showButton.addEventListener('click', showAlert);
        this.innerText = 'Opreste afisarea';
        showMessage('Alerta va fi afisata');

        eventBound = true;
      }
    });

    removeEventsButton.addEventListener('click', function () {
      if (confirm('Esti sigur ca vrei sa stergi butoanele din DOM?')) {
        showButton.remove();
        toggleButton.remove();
      }
    });
  });

  //hoisting
  function showMessage(message) {
    let paragraphElement = document.querySelector('.message');

    if (paragraphElement === null) {
      paragraphElement = document.createElement('p');
      paragraphElement.classList.add('message');

      document.body.append(paragraphElement);
    }

    paragraphElement.innerText = message;
  }
})();
