var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Accueil',
 });
});

var dataBike = [{
      bikeName: 'BIKO65',
      bikeImage: '/images/bike-1.jpg',
      bikePrice: 679,
      quantity: 1
    },{
      bikeName: 'ZOOK7',
      bikeImage: '/images/bike-2.jpg',
      bikePrice: 799,
      quantity: 1
    },{
      bikeName: 'LIKO89',
      bikeImage: '/images/bike-3.jpg',
      bikePrice: 839,
      quantity: 1
    },{
      bikeName: 'GEWO',
      bikeImage: '/images/bike-4.jpg',
      bikePrice: 1206,
      quantity: 1
    },{
      bikeName: 'TITAN5',
      bikeImage: '/images/bike-5.jpg',
      bikePrice: 989,
      quantity: 1
    },{
      bikeName: 'AMIG39',
      bikeImage: '/images/bike-6.jpg',
      bikePrice: 599,
      quantity: 1
    }]

router.get('/shop', function(req, res, next) {
  if ( req.session.sessionCart == undefined ) {
    req.session.sessionCart = [];
    console.log('sessionCart is undefined')
  }
  res.render('shop', {
    title: 'BikeShop - Accueil',
    dataBike,
   });
});

router.post('/addToCart', function(req, res, next) {

  req.session.sessionCart.push(
    {
      bikeName: req.body.bikeNameFromFront,
      bikePrice: req.body.bikePriceFromFront,
      bikeImage: req.body.bikeImageFromFront,
      bikeQuantity: req.body.bikeQuantityFromFront
    }
  );
  res.render('panier', {
    title: 'BikeShop - Panier',
    sessionCart: req.session.sessionCart,
 });
});

router.post('/delete-shop', function(req, res, next) {
  req.session.sessionCart.splice(req.body.position, 1);
  res.render('panier', {
    title: 'BikeShop - Panier',
    sessionCart: req.session.sessionCart,
   });
});

router.post('/update-shop', function(req, res, next) {
  req.session.sessionCart[req.body.position].bikeQuantity = req.body.quantity;

  res.render('panier', {
    title: 'BikeShop - Panier',
    sessionCart: req.session.sessionCart,
   });
});


module.exports = router;
