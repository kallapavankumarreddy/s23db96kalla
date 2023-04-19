var express = require('express');
const pen_controlers= require('../controllers/pen');
var router = express.Router();
/* GET pen */
router.get('/', pen_controlers.pen_view_all_Page );
/* GET detail pen page */
router.get('/detail', pen_controlers.pen_view_one_Page);
module.exports = router;