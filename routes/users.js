var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/helpdesk', function(req, res, next) {
  res.render('./helpDesk/index');
});

module.exports = router;
