const mongoose = require('mongoose')
const {Schema} = mongoose
const noteSchema = new Schema({
    producto: { type: String, required: true},
    tipo: { type: String, required: true},
    serial: { type: String, required: true},
    costo: { type: String, required: true},
    fecha: { type: String, required: true},
    estado: { type: String, required: true},
    descripcion: { type: String, required: false}
})

module.exports = mongoose.model('Note', noteSchema)