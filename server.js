const express = require('express');
const mongoose = require("mongoose");

const app = express();
app.use(express.urlencoded({extended: false}));

// CONECCION BD
mongoose.connect("mongodb://localhost/XXX");


// ENDPOINTS
const Cliente = require["/modelos/cliente"]
const Cuentas = require["/modelos/cuentas"]
const Pagos = require["/modelos/pagos"]

// CLIENTES
app.get('/clientes', async (req, res) => {
  const clientes = await Cliente.find();
  res.render("lista_cliente", {clientes});
}); 

app.get('/clientes/:id', async (req, res) => {
  const { id } = req.param;
  const cliente = await Cliente.findById(id);
  res.rendirect('/clientes');
});

app.post('/clientes', async (req, res) => {
  const cliente = new Cliente(req.body)
  await cliente.save();
  res.rendirect('/clientes');
});

app.put('/clientes/:id', async (req, res) => {
  const { id } = req.param;
  await Cliente.update({_id : id}, req.body);
  res.rendirect('/clientes');
});

app.delete('/clientes/:id', async (req, res) => {
  const { ID } = req.param;
  await Cliente.remove({_id : id});
  res.rendirect('/clientes');
});

// CUENTAS
app.get('/cliente/cuentas', async (req, res) => {
  const { id } = req.param;
  const cuentas = await Cuenta.find().byCliente(id);
  res.render("lista_cuenta", {cuentas});
});

app.get('/clientes/cuentas/:id', async (req, res) => {
  const { id } = req.param;
  const Cuenta = await Cuenta.findById(id);
  res.render("ficha_cuenta",{Cuenta});
});

app.post('/clientes/cuentas', async (req, res) => {
  const Cuenta = new Cuenta(req.body)
  await Cuenta.save();
});

app.put('/clientes/cuentas/:id', async (req, res) => {
  const { id } = req.param;
  await Cuenta.update({_id : id}, req.body);
});

app.delete('/clientes/cuentas/:id', async (req, res) => {
  const { ID } = req.param;
  await Cuenta.remove({_id : id});
});

// PAGOS

app.get('/clientes/pagos', async (req, res) => {
const { id } = req.param;	
const pagos = await Pago.find().byCliente(id);
res.render("lista_pago", {pagos});
});

app.get('/clientes/cuentas/pagos', async (req, res) => {
const { id } = req.param;	
const pagos = await Pago.find().byCuenta(id);
res.render("lista_pago", {pagos});
});

app.get('/clientes/cuentas/pagos/:id', async (req, res) => {
const { id } = req.param;
const Pago = await Pago.findById(id);
res.render("ficha_pago",{Pago});

});

app.post('/clientes/cuentas/pagos', async (req, res) => {
const Pago = new Pago(req.body)
await Pago.save();

});

app.put('/clientes/cuentas/pagos/:id', async (req, res) => {
const { id } = req.param;
await Pago.update({_id : id}, req.body);

});

app.delete('/clientes/cuentas/pagos/:id', async (req, res) => {
  const { ID } = req.param;
  await Pago.remove({_id : id});
});

// start server
app.listen(process.env.PORT || 3000, function () {
  console.log('API andando con express...');
});

