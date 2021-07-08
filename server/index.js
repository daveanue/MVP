const express = require('express');
const path = require('path');
const {getPokemonData} = require('../api-helper/helper.js');
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());


app.use('/', (req, res) => {
  getPokemonData('bulbasaur').then((resp) => {
    // console.log('data', resp.data);
    console.log('pic', resp.data.sprites.versions['generation-v']);
    // res.status(200).send(resp)
  }).catch((err) => {
    res.status(404).send(err);
  });
});

app.listen(port, () => {
  console.log('App has started on port', port);
});