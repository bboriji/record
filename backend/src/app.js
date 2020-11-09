const express = require("express");
const { postRouter, userRouter } = require("./controllers");

require('./database')();

const app = express();

app.use(express.json());
app.use('/api', postRouter);
app.use('/api', userRouter)

module.exports = app;
