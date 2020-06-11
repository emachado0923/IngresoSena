'use strict'

const { Schema, model } = require("mongoose");

const aprendizSchema  = new Schema(
    {
        documentoIdentidad: {
            type: String,
            required:true,
            max: 20,
            unique: true
        },
        nombre: {
            type: String,
            required: true,
            max: 30
        },
        apellido: {
            type: String,
            required: true,
            max: 50
        },
        ficha: {
            type: String,
            required: true,
            max: 20
        },
        programaDeFormacion: {
            type: String,
            required: true,
            max: 50
        },
        email: {
            type: String,
            required: true,
            max: 50,
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
        torre: {
            type: String,
            required: true,
            max: 30
        },
        estado:{
            type:Boolean,
            required:false,
            default:false
        },
        horaEntrada: {
            type: Date, default: Date.now
        },
        horaSalida: {
            type: Date, default: Date.now
        }
    },
)

module.exports = model("Aprendiz", aprendizSchema);

