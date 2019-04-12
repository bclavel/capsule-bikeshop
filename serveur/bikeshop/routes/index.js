var express = require('express');
var router = express.Router();

// Set your secret key: remember to change this to your live secret key in production
// See your keys here: https://dashboard.stripe.com/account/apikeys
var stripe = require("stripe")("sk_test_xb4VL0s8UXikXJvsBjQddFuU00mpWe9WPB");

(async () => {
  const charge = await stripe.charges.create({
    amount: 999,
    currency: 'usd',
    source: 'tok_visa',
    receipt_email: 'jenny.rosen@example.com',
  });
})();

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


router.post('/checkout', function(req, res, next) {

  console.log(req.body);
  const token = req.body.stripeToken;

  var listeBikes = [];
  for (var i = 0; i < req.session.sessionCart.length; i++) {
    listeBikes.push(req.session.sessionCart[i].bikeName);
  }

  const charge = stripe.charges.create({
    amount: req.body.amount,
    currency: 'eur',
    source: token,
    receipt_email: 'jenny.rosen@example.com',
    description: `Jon Doe, 11 allée des peupliers Lyon, Ref: ${listeBikes}`
  });

  res.render('shop', {
    title: 'Accueil',
    dataBike
 });
});


module.exports = router;
