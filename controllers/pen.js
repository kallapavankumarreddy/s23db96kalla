var pen = require('../models/pen');
// List of all pen
exports.pen_list = function(req, res) {
res.send('NOT IMPLEMENTED: pen list');
};
// for a specific pen.
exports.pen_detail = function(req, res) {
res.send('NOT IMPLEMENTED: pen detail: ' + req.params.id);
};
// Handle pen create on POST.
exports.pen_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: pen create POST');
};
// Handle pen delete form on DELETE.
exports.pen_delete = function(req, res) {
res.send('NOT IMPLEMENTED: pen delete DELETE ' + req.params.id);
};
// Handle pen update form on PUT.
exports.pen_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: pen update PUT' + req.params.id);
};