const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const server = express();

const authRouter = require('./routes/auth-router.js');
const usersRouter = require('./routes/users-router.js');


server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/api/auth', authRouter);
server.use('/api/users', usersRouter);

module.exports = server;