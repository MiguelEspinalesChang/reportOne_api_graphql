import '@babel/polyfill'
import { ApolloServer, ApolloError } from 'apollo-server-express'
import express from 'express'
import { config } from 'dotenv'
import resolvers from './resolvers'
// import typeDefs from './typeDefs'
import { typeDefs } from './typeDefs/usuario'
import mongoose from 'mongoose'
import models from './models'
import { createServer } from 'http'
// import Utils from './utils'

// const { jwtAuth } = Utils;
var app = express()
var server = app.listen(3000, function () {
  console.log('app running on port.', server.address().port)
})
