//File: controllers/clientes.js
var mongoose = require('mongoose');
var Cliente  = mongoose.model('Cliente');

//GET - Return all Clientes in the DB
exports.findAllClientes = function(req, res) {
	Cliente.find(function(err, clientes) {
    if(err) res.send(500, err.message);

    console.log('GET /clientes')
		res.status(200).jsonp(clientes);
	});
};

//GET - Return a Cliente with specified ID
exports.findById = function(req, res) {
	Cliente.findById(req.params.id, function(err, cliente) {
    if(err) return res.send(500, err.message);

    console.log('GET /cliente/' + req.params.id);
		res.status(200).jsonp(cliente);
	});
};

//POST - Insert a new Cliente in the DB
exports.addCliente = function(req, res) {
	console.log('POST');
	console.log(req.body);

	var cliente = new Cliente({

		nombre: req.body.fecha_pago,
		apellido: req.body.apellido,
		tipo_documento: req.body.tipo_documento,
		documento: req.body.documento,
		nro_cliente: req.nro_cliente,
		fecha_alta_cliente: req.tipo_documento.fecha_alta_cliente


	});

	cliente.save(function(err, cliente) {
		if(err) return res.send(500, err.message);
    res.status(200).jsonp(cliente);
	});
};

//PUT - Update a register already exists
exports.updateCliente = function(req, res) {
	Cliente.findById(req.params.id, function(err, cliente) {
    cliente.nombre = req.body.nombre;
    cliente.apellido = req.body.apellido;
    cliente.tipo_documento = req.body.tipo_documento;
    cliente.documento = req.body.documento;
    cliente.nro_cliente = req.body.nro_cliente;
    cliente.fecha_alta_cliente = req.body.fecha_alta_cliente;

		cliente.save(function(err) {
			if(err) return res.send(500, err.message);
      console.log('PUT /cliente/' + req.params.id);
      res.status(200).jsonp(cliente);
		});
	});
};

//DELETE - Delete a Cliente with specified ID
exports.deleteCliente = function(req, res) {
	Cliente.findById(req.params.id, function(err, cliente) {
		cliente.remove(function(err) {
			if(err) return res.send(500, err.message);
      console.log('DELETE /cliente/' + req.params.id);
      res.status(200).jsonp(cliente);
		})
	});
};
