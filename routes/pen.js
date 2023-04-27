var express = require('express');
const pen_controlers= require('../controllers/pen');
var router = express.Router();
/* GET pen */
router.get('/', pen_controlers.pen_view_all_Page );
const secured = (req, res, next) => {
    if (req.user){
    return next();
    }
    req.session.returnTo = req.originalUrl;
    res.redirect("/login");
}
/* GET detail pen page */
router.get('/detail', pen_controlers.pen_view_one_Page);
/* GET create pen page */
router.get('/create', secured, pen_controlers.pen_create_Page);
/* GET create update page */
router.get('/update', pen_controlers.pen_update_Page);
/* GET delete pen page */
router.get('/delete', secured, pen_controlers.pen_delete_Page);

module.exports = router;
