exports = module.exports = function(app, mongoose) {
  var cuentaSchema = new mongoose.Schema({
    id_cliente: { type: Number},
    id_cuenta:    { type: Number},
    descripcion: { type: String },
    deuda_vencida :{ type: Number},
    deuda_a_vencer : { type: Number},
    fecha_ingreso_mora:  { type: Date },
  });
  mongoose.model('Cuenta', cuentaSchema);
};
