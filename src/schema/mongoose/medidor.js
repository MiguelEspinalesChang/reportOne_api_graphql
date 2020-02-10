import mongoose, { Schema } from 'mongoose';

const medidor = new Schema({
    nis: {
        type: String,
        required: true,
        min: 5
    },
    numeroMedidor: {
        type: String,
        required: true,
        min: 5
    },
    nombre: {
        type: String,
        required: true,
        min: 5,
        max: 50
    },
    modoUso: {
        type: String,
        required: true,
        min: 5,
        max: 50,
    },
    grupo: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'grupo',
        },
    ],
    area: {
        type: String,
        required: true,
        min: 5,
        max: 50,
    },
    propietario:
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'usuario',
        require: true
    },
    ubicacion: {
        type: String,
        min: 5,
        max: 50,
    },
    KwhPorDia: {
        type: Number,
        require: true
    },
    potenciaPorDia: {
        type: Number,
        require: true
    },
    marca: {
        type: String,
        required: true,
        min: 5,
        max: 50,
    },
    modelo: {
        type: String,
        required: true,
        min: 5,
        max: 50,
    },
    tipo: {
        type: String,
        required: true,
        min: 5,
        max: 50,
    },
    claseMedidor: {
        type: Number,
        require: true
    },
    presicion: {
        type: Number,
        require: true
    },
    codigoFabrica: {
        type: String,
        required: true,
        min: 5,
        max: 50,
    },
    tcPrimaria: {
        type: Number,
        require: true
    },
    tcSecundaria:{
        type: Number,
        require: true
    },
    relacionTc :{
        type: Number,
        require: true
    },
    tpPrimaria :{
        type: Number,
        require: true
    },
    tpSecundaria:{
        type: Number,
        require: true
    },
    relacionTp : {
        type: Number,
        require: true
    },
    numeroCerie :{
        type: String,
        required: true,
        min: 5,
        max: 50,
    },
    puntoIa:{
        type: Number,
        require: true
    },
    puntoIb:{
        type: Number,
        require: true
    },
    puntoIc:{
        type: Number,
        require: true
    },
    puntoVa:{
        type: Number,
        require: true
    },
    puntoVb:{
        type: Number,
        require: true
    },
    puntoVc:{
        type: Number,
        require: true
    }
})

const modelmedidor = mongoose.model('medidor', medidor);

export default modelmedidor