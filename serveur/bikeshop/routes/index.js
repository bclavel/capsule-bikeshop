var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Express Yo!',
    subtitle: 'Ouesch gro!'
 });
});

var dataBike = [{
      bikeName: 'BIKO65',
      bikeImage: '/images/bike-1.jpg',
      bikePrice: 679
    },{
      bikeName: 'ZOOK7',
      bikeImage: '/images/bike-2.jpg',
      bikePrice: 799
    },{
      bikeName: 'LIKO89',
      bikeImage: '/images/bike-3.jpg',
      bikePrice: 839
    },{
      bikeName: 'GEWO',
      bikeImage: '/images/bike-4.jpg',
      bikePrice: 1206
    },{
      bikeName: 'TITAN5',
      bikeImage: '/images/bike-5.jpg',
      bikePrice: 989
    },{
      bikeName: 'AMIG39',
      bikeImage: '/images/bike-6.jpg',
      bikePrice: 599
    }]

router.get('/shop', function(req, res, next) {
  res.render('shop', {
    title: 'BikeShop - Accueil',
    dataBike: dataBike,
   });
});

var dataCardBike = [{
      bikeName: 'BIKO65',
      bikeImage: '/images/bike-1.jpg',
      bikePrice: 678,
      quantity: 2
    },{
      bikeName: 'ZOOK87',
      bikeImage: '/images/bike-2.jpg',
      bikePrice: 799,
      quantity: 1
    },{
      bikeName: 'LIKO89',
      bikeImage: '/images/bike-3.jpg',
      bikePrice: 839,
      quantity: 4
    },{
      bikeName: 'AMIG39',
      bikeImage: '/images/bike-6.jpg',
      bikePrice: 839,
      quantity: 2
    }]

router.get('/basket',
    function(req, res, next) {
      res.render('panier', {
        title: 'BikeShop - Panier',
        dataCardBike: dataCardBike,
       });
    }
);

module.exports = router;
