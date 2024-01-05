const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

// /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

router.post('/add-product', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
});

router.get('/contactus', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'contactus.html'));
});

router.post('/contactus', (req, res, next) => {
  //res.sendFile(path.join(rootDir, 'views', 'contactus.html'));
  console.log(req.body);
  res.sendFile(path.join(rootDir, 'views', 'success.html'));
});
// /admin/add-product => POST


module.exports = router;