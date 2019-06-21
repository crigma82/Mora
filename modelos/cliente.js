module.exports = function (app, mongoose) {
  const clienteSchema = new mongoose.Schema({
    nombre: { type: String },
    apellido: { type: String },
    tipo_documento: {
      type: String,
      enum: ['DNI', 'LE', 'LC']
    },
    documento: { type: Number },
    nro_cliente: { type: String },
    fecha_alta_cliente: { type: Date },
  });
  mongoose.model('Cliente', clienteSchema);
};
