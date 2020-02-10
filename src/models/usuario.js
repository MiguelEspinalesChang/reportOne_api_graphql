import Joi from '@hapi/joi'
import mongoose, { Schema } from 'mongoose'

const usuarioSchema = new Schema({
    nombre: {
        type: String,
        required: true,
        min: 5,
        max: 20
    },
    apelido: {
        type: String,
        required: true,
        min: 5,
        max: 20
    },
    role: {
        type: String,
        required: true,
        default: 'user'
    },
    email: {
        type: String,
        required: true,
        min: 5,
        max: 50
    },
    password: {
        type: String,
        required: true,
        min: 8,
        max: 20
    }
})

const validation = Joi.object().keys({
    nombre: Joi.string().min(5).max(20).required(),
    apelido: Joi.string().min(5).max(20).required(),
    role: Joi.string().default('user').required(),
    email: Joi.string().min(5).max(50).required(),
    password: Joi.string().min(8).max(20).required(),
})

const modelUsuario = mongoose.model('usuario', usuarioSchema);

export default {
    model: modelUsuario,
    validation
}