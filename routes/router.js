/*
 * router.js file. This controller manage all the application routes.
 */


/********************************* IMPORTS ***********************************/

//General imports
var express = require('express');
var router = express.Router();

//Controlers imports
var index = require('../controllers/index');

/*****************************************************************************/


/********************************* ROUTES ************************************/

/* GET home page. */
router.get('/', function(req, res, next) {
  index.render(res);
});

module.exports = router;

/*****************************************************************************/