module.exports = function (app, mongoose) {
  const pagosSchema = new mongoose.Schema({
    fecha_pago:  { type: Date },
    monto_pago: { type: Number },
    id_cliente: { type: Number },
    id_cuenta: { type: Number },
  });
  mongoose.model('Pagos', pagosSchema);
};
