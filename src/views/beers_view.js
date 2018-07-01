const PubSub = require('../helpers/pub_sub.js');

const BeersView = function(selectBeer) {
  this.selectBeer = selectBeer
}

BeersView.prototype.bindEvents = function () {
  PubSub.subscribe('Beers:beers-data-ready', (event) => {
    const allBeers = event.detail;
    console.log(allBeers);
    this.populate(allBeers);
  });

  // this.beersView.addEventListener('change', (evt) => {
  //   const selectedIndex = evt.target.value;
  //   PubSub.publish('BeersView:change', selectedIndex);
  // })
};

BeersView.prototype.populate = function (beerData) {
  beerData.forEach((beer, index) => {
    const option = document.createElement('option');
    option.textContent = beer.name;
    option.value = index;
    this.selectBeer.appendChild(option);
  })
};

module.exports = BeersView;
