'use strict'
require('mongoose-type-email');
const { Schema, model } = require("mongoose");
require('mongoose-type-email');


const estadoFuncionarioSchema  = new Schema(
    {
        nombre: {
            type: String,
            required: true,
            max: 30
        },
        email: {
            type: String,
            required: true,
            max: 50
        },
        documentoIdentidad: {
            type: String,
            required:true,
            max: 20,
            unique: true
        },
        celular: {
            type: String,
            required: true,
            max: 50
        },
        telefono: {
            type: String,
            required: true,
            max: 50
        },
        direccionResidencia: {
            type: String,
            required: true,
            max: 50
        },
        eps: {
            type: String,
            required: true,
            max: 30
        },
        horaEntrada: {
            type: Date,
            default: Date.now
        },
    },
)

module.exports = model("EstadoFuncionario", estadoFuncionarioSchema);
