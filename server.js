/* jshint esversion:6*/
const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 9999;

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('*', (req, res) => {
  res.sendFile('./public/index.html', { root: __dirname});
});
app.listen(PORT, (err) => {
  console.log(`server listening on port: ${PORT}`);
});