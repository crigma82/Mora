//File: controllers/pagos.js
var mongoose = require('mongoose');
var Pago  = mongoose.model('Pago');

//GET - Return all Pagos in the DB
exports.findAllPagos = function(req, res) {
	Pago.find(function(err, pagos) {
    if(err) res.send(500, err.message);

    console.log('GET /pagos')
		res.status(200).jsonp(pagos);
	});
};

//GET - Return a Pago with specified ID
exports.findById = function(req, res) {
	Pago.findById(req.params.id, function(err, pago) {
    if(err) return res.send(500, err.message);

    console.log('GET /pago/' + req.params.id);
		res.status(200).jsonp(pago);
	});
};

//POST - Insert a new Pago in the DB
exports.addPago = function(req, res) {
	console.log('POST');
	console.log(req.body);

	var pago = new Pago({
    fecha_pago: req.body.fecha_pago,
    monto_pago: req.body.monto_pago,
    id_cliente: req.body.id_cliente,
    id_cuenta: req.body.id_cuenta

	});

	pago.save(function(err, pago) {
		if(err) return res.send(500, err.message);
    res.status(200).jsonp(pago);
	});
};

//PUT - Update a register already exists
exports.updatePago = function(req, res) {
	Pago.findById(req.params.id, function(err, pago) {
    pago.fecha_pago = req.body.fecha_pago;
    pago.monto_pago = req.body.monto_pago;
    pago.id_cliente = req.body.id_cliente;
    pago.id_cuenta = req.body.id_cuenta;
		pago.save(function(err) {
			if(err) return res.send(500, err.message);
      console.log('PUT /pago/' + req.params.id);
      res.status(200).jsonp(pago);
		});
	});
};

//DELETE - Delete a Pago with specified ID
exports.deletePago = function(req, res) {
	Pago.findById(req.params.id, function(err, pago) {
		pago.remove(function(err) {
			if(err) return res.send(500, err.message);
      console.log('DELETE /pago/' + req.params.id);
      res.status(200).jsonp(pago);
		})
	});
};
