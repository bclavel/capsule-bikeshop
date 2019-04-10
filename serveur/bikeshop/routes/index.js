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
  res.render('shop', {
    title: 'BikeShop - Accueil',
    dataBike: dataBike,
   });
});

var dataCardBike = []

router.post('/addToCart', function(req, res, next) {
//  console.log(req.body);
//   if (dataCardBike.length == 0) {
//     dataCardBike.push(req.body);
//     // console.log(dataCardBike)
//     console.log('yo length = 0')
//     console.log(dataCardBike)
//   } else {
//     for(var i = 0; i < dataCardBike.length; i++ ) {
//     if (req.body.bikeNameFromFront == dataCardBike[i].bikeNameFromFront) {
//       dataCardBike[i].bikeQuantityFromFront++
//       console.log('yo doublon + 1')
//       console.log(dataCardBike)
//     } else {
//       dataCardBike.push(req.body)
//       console.log('yo pas de doublon, ajout ligne')
//       console.log(dataCardBike)
//     }
//   }
// }
  dataCardBike.push(req.body);
  console.log(dataCardBike);
  res.render('panier', {
    title: 'BikeShop - Panier',
    dataCardBike
 });
});

router.post('/delete-shop', function(req, res, next) {
  dataCardBike.splice(req.body.position, 1);
  res.render('panier', {
    title: 'BikeShop - Panier',
    dataCardBike
   });
});

router.post('/update-shop', function(req, res, next) {
  dataCardBike[req.body.position].bikeQuantityFromFront = req.body.quantity
  res.render('panier', {
    title: 'BikeShop - Panier',
    dataCardBike
   });
});


module.exports = router;
