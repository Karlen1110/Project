const { json } = require('express');
const express = require('express');

const app = express();

app.use('/', (req, res) =>{
  const leq = {
    name: "Jason"
  }
  res.json(leq);
})

app.listen(5000, () =>{
  console.log('Server is started', new Date());
})