import { gql } from 'apollo-server-express'

export const typeDefs = gql`
    type usuario {
        id: ID!
        nombre: String!
        apelido: String!
        role: String!
        email: String!
        password: String!
    }

    extend type Query {
        todosLosUsuarios() :[usuario]
    }

    extend type Mutation {
        crearUsuario(
            nombre: String!
            apelido: String!
            role: String!
            email: String!
            password: String!
        ): usuario
    }
`

