import mongoose, { Schema } from 'mongoose'

const grupo = new Schema({
  nombre: {
    type: String,
    required: true,
    min: 5,
    max: 50
  },
  descripcion: {
    type: String,
    required: true,
    min: 5,
    max: 50
  }
})

const modelGrupo = mongoose.model('grupo', grupo);

export default modelGrupo
