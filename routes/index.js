var express = require('express');
var router = express.Router();

/* GET Builder aplication main Landing page. */
router.get('/builder', function(req, res, next) {
  res.render('./builder/index', { title: 'TecHub' });
});

router.get('/', (req, res)=>{
  res.render('./builder/index', {title: 'TecHub'});
})

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'TecHub' });
});

/* GET portfolio page. */
router.get('/portfolio', function(req, res, next) {
  res.render('portfolio', { title: 'TecHub', header: 'Serviços que oferecemos'});
});

/* GET services page. */
router.get('/services', function(req, res, next) {
  res.render('services', { title: 'TecHub', header: 'Serviços que oferecemos'});
});

/* GET services page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'TecHub', header: 'Serviços que oferecemos'});
});

module.exports = router;
