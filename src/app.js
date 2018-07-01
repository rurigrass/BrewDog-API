const Beers = require('./models/beers.js');
const BeersView = require('./views/beers_view.js');

document.addEventListener('DOMContentLoaded', () => {


  const beers = new Beers('https://api.punkapi.com/v2/beers')
    beers.getData();

  const selectBeer = document.querySelector('#selectBeer');
  const beersDropdown = new BeersView(selectBeer);
  beersDropdown.bindEvents();

});
