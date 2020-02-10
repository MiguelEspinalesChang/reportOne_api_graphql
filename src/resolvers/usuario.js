import { ApolloError } from 'apollo-server-express'
import Joi from '@hapi/joi'

const usuarioResolvers = {
  Query: {
    todosLosUsuarios: async (root, args, { User }, info) => {
      try {
        const totalUser = await User.model.find({})
        return totalUser
      } catch (e) {
        throw new ApolloError(e.message)
      }
    }
  },
  Mutation: {
    crearUsuario: async (root, args, { User }, info) => {
      try {
        const nuevoUSuario = { ...args }
        const result = await Joi.validate(nuevoUSuario, User.validation);
        console.log(result)

        return nuevoUSuario.save()
      } catch (e) {
        throw new ApolloError(e.message)
      }
    }
  }
}

export default usuarioResolvers
