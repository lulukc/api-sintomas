const express = require('express')
const mongoose = require('mongoose')
const routes = require('./router')


const port = 3333;
const app = express();

mongoose.connect("mongodb://localhost:27017/api-sintomas", {
  useNewUrlParser: true,
  useFindAndModify: true,
  useUnifiedTopology: true,
});

app.use(routes);
app.use(express.json);


app.listen(port, () => {
  console.log(`O servidor esta rodando na porta ${port}`);
});