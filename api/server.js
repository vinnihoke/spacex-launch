require('dotenv').config();
const express = require('express');
const graphqlHTTP = require('express-graphql');
const helmet = require('helmet');
const morgan = require('morgan');
const schema = require("./schema.js");

const server = express()


server.use(helmet());
server.use(morgan('dev'));
server.use(express.json());

server.use('/graphql', graphqlHTTP({
	schema,
	graphiql: true
}));

module.exports = server

