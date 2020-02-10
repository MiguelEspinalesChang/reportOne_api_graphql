import { gql } from 'apollo-server-express'

export default gql`
type Form {
id: ID!
title: String!
description: String
questions: [QuestionGroup]
requisites: [Requisite]
}

type Medidores {
    id
    asdasd
    asd
}

extend type Query {
    listaMEdidores(pagina: Number, PorPagina: Number): [Medidores]
test: String
formById(id: String!): Form
formList: [Form]
}

extend type Mutation {
createForm(
title: String!
): Form
assignForm(
idUser: String
idForm: String
): UserForm
removeUserForm(
idUserForm: String
): String
}

`