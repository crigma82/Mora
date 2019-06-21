//File: controllers/cuentas.js
var mongoose = require('mongoose');
var Cuenta  = mongoose.model('Cuenta');

//GET - Return all Cuentas in the DB
exports.findAllCuentas = function(req, res) {
	Cuenta.find(function(err, cuentas) {
    if(err) res.send(500, err.message);

    console.log('GET /cuentas')
		res.status(200).jsonp(cuentas);
	});
};

//GET - Return a Cuenta with specified ID
exports.findById = function(req, res) {
	Cuenta.findById(req.params.id, function(err, cuenta) {
    if(err) return res.send(500, err.message);

    console.log('GET /cuenta/' + req.params.id);
		res.status(200).jsonp(cuenta);
	});
};

//POST - Insert a new Cuenta in the DB
exports.addCuenta = function(req, res) {
	console.log('POST');
	console.log(req.body);

	var cuenta = new Cuenta({

		id_cliente: req.body.id_cliente,
		id_cuenta: req.body.id_cuenta,
		descripcion: req.body.descripcion,
		deuda_vencida: req.body.deuda_vencida,
		deuda_a_vencer: req.deuda_a_vencer,
		fecha_ingreso_mora: req.body.fecha_ingreso_mora

	});

	cuenta.save(function(err, cuenta) {
		if(err) return res.send(500, err.message);
    res.status(200).jsonp(cuenta);
	});
};

//PUT - Update a register already exists
exports.updateCuenta = function(req, res) {
	Cuenta.findById(req.params.id, function(err, cuenta) {
    cuenta.id_cliente = req.body.id_cliente;
    cuenta.id_cuenta = req.body.id_cuenta;
    cuenta.descripcion = req.body.descripcion;
    cuenta.deuda_vencida = req.body.deuda_vencida;
    cuenta.deuda_a_vencer = req.body.deuda_a_vencer;
    cuenta.fecha_ingreso_mora = req.body.fecha_ingreso_mora;


		cuenta.save(function(err) {
			if(err) return res.send(500, err.message);
      console.log('PUT /cuenta/' + req.params.id);
      res.status(200).jsonp(cuenta);
		});
	});
};

//DELETE - Delete a Cuenta with specified ID
exports.deleteCuenta = function(req, res) {
	Cuenta.findById(req.params.id, function(err, cuenta) {
		cuenta.remove(function(err) {
			if(err) return res.send(500, err.message);
      console.log('DELETE /cuenta/' + req.params.id);
      res.status(200).jsonp(cuenta);
		})
	});
};
