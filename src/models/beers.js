const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');

const Beers = function(url) {
  this.url = url;
  this.beers = [];
}

Beers.prototype.getData = function () {
  const request = new RequestHelper(this.url);
  const handleRequestComplete = (responseData) => {
    this.beers = responseData;
    PubSub.publish('Beers:beers-data-ready', this.beers);
  };

  request.get()
    .then(handleRequestComplete).catch(error => console.error(error));
};

// PubSub.subscribe('BeersView:change', (evt) => {
//   const selectedIndex = evt.detail;
//   this.publishBeerDetails(selectedIndex);
//
// };
//
//
//
// Beers.prototype.publishBeerDetails = function(beerIndex){
//   const selectedBeer = this.beers[beerIndex];
//   console.log(selectedBeer);
//   PubSub.publish('Beers:selected-beer-ready', selectedBeer);
// };



module.exports = Beers;
