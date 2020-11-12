const express = require("express");
const cookieParser = require('cookie-parser')
const { postRouter, userRouter, authRouter } = require("./controllers");

require('./database')();

const app = express();

app.use(express.json());
app.use(cookieParser())
app.use('/api', postRouter);
app.use('/api', userRouter)
app.use('/api', authRouter)

module.exports = app;
