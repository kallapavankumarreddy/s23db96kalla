var pen = require('../models/pen');
// List of all pen
// List of all pen
exports.pen_list = async function(req, res) {
    try{
    thepen = await pen.find();
    res.send(thepen);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
/*exports.pen_list = function(req, res) {
res.send('NOT IMPLEMENTED: pen list');
};*/
// Handle pen create on POST.

// for a specific pen.
exports.pen_detail = function(req, res) {
res.send('NOT IMPLEMENTED: pen detail: ' + req.params.id);
};
// Handle pen create on POST.
exports.pen_create_post = async function(req, res) {
// res.send('NOT IMPLEMENTED: pen create POST');
console.log(req.body)
    let document = new pen();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"pen_type":"goat", "cost":12, "size":"large"}
    document.brand = req.body.brand;
    document.price = req.body.price;
    document.color = req.body.color;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
};
// Handle pen delete form on DELETE.
exports.pen_delete = function(req, res) {
res.send('NOT IMPLEMENTED: pen delete DELETE ' + req.params.id);
};
// Handle pen update form on PUT.
exports.pen_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: pen update PUT' + req.params.id);
};

// VIEWS
// Handle a show all view
exports.pen_view_all_Page = async function(req, res) {
    try{
    thepen = await pen.find();
    res.render('pen', { title: 'pen Search Results', results: thepen });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };